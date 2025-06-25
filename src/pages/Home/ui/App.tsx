import { ConfirmationModal } from '@/features/ConfirmationModal'
import { FilterModal } from '@/features/FilterModal'
import { useFilters } from '@/shared/api'
import { useFilterStore } from '@/shared/store/FilterStore'
import { Button } from '@/shared/ui'

import './App.css'

export const App = () => {
	const { openFilterModal, activeFilters } = useFilterStore()
	const { data: filtersData } = useFilters()

	const hasActiveFilters =
		Object.keys(activeFilters).length > 0 &&
		Object.values(activeFilters).some(filters => filters.length > 0)

	return (
		<section className="w-full h-dvh flex items-center justify-center flex-col">
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<h1 className="text-6xl text-gray-600 mb-12">
				WinWinTravel frontend test task
			</h1>
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<Button onClick={openFilterModal}>Open Filter</Button>

			{filtersData && hasActiveFilters && (
				<div className="mt-8 p-4 bg-gray-100 rounded max-w-1xl overflow-y-auto">
					{/* eslint-disable-next-line i18next/no-literal-string */}
					<h2 className="font-bold mb-2">Available Filters (JSON):</h2>
					<pre className="text-sm overflow-auto">
						{JSON.stringify(filtersData, null, 2)}
					</pre>
				</div>
			)}

			{/* Modals */}

			<FilterModal />
			<ConfirmationModal />
		</section>
	)
}
