import { create } from 'zustand'

import { queryClient } from '@/query'
import type { FilterType, SearchRequestFilter } from '@/shared/api/types'

type ModalType = 'filter' | 'confirmation' | null

interface FilterState {
	currentModal: ModalType
	activeFilters: Record<string, string[]>
	draftFilters: Record<string, string[]>

	openFilterModal: () => void
	openConfirmationModal: () => void
	closeModal: () => void
	toggleDraftFilter: (category: string, value: string) => void
	applyFilters: () => void
	clearDraftFilters: () => void
	clearActiveFilters: () => void
	resetDraftToActive: () => void
	discardChanges: () => void
	getSearchRequestFilters: () => SearchRequestFilter
}

export const useFilterStore = create<FilterState>(set => ({
	currentModal: null,
	activeFilters: {},
	draftFilters: {},

	openFilterModal: () =>
		set(state => ({
			currentModal: 'filter',
			draftFilters: { ...state.activeFilters }
		})),

	openConfirmationModal: () => set({ currentModal: 'confirmation' }),

	closeModal: () => set({ currentModal: null }),

	toggleDraftFilter: (category: string, value: string) =>
		set(state => {
			const categoryFilters = state.draftFilters[category] || []
			const isSelected = categoryFilters.includes(value)

			return {
				draftFilters: {
					...state.draftFilters,
					[category]: isSelected
						? categoryFilters.filter(item => item !== value)
						: [...categoryFilters, value]
				}
			}
		}),

	applyFilters: () => {
		queryClient.invalidateQueries({ queryKey: ['filters'] })

		set(state => ({
			activeFilters: { ...state.draftFilters },
			currentModal: null
		}))
	},

	clearDraftFilters: () => set({ draftFilters: {} }),

	clearActiveFilters: () => {
		queryClient.invalidateQueries({ queryKey: ['filters'] })

		set({ activeFilters: {}, draftFilters: {} })
	},

	resetDraftToActive: () =>
		set(state => ({
			draftFilters: { ...state.activeFilters }
		})),

	discardChanges: () =>
		set(state => ({
			draftFilters: { ...state.activeFilters },
			currentModal: null
		})),

	//Converts active filters to the format required for search requests
	getSearchRequestFilters: () => {
		const state = useFilterStore.getState()
		const result: SearchRequestFilter = []

		Object.entries(state.activeFilters).forEach(([categoryId, optionIds]) => {
			if (optionIds.length > 0) {
				result.push({
					id: categoryId,
					type: 'OPTION' as FilterType,
					optionsIds: optionIds
				})
			}
		})

		return result
	}
}))
