import React from 'react'
import { useTranslation } from 'react-i18next'

import { useFilterStore } from '@/shared/store/FilterStore'
import { Button, Center, Divider, ModalWindow } from '@/shared/ui'

import {
	FilterSectionData,
	getFilterSectionsData
} from '../data/FilterSectionsData'
import { FilterSection, FilterSectionProps } from './FilterSection'

const FilterModal: React.FC = () => {
	const { t } = useTranslation('filter')
	const data: FilterSectionData[] = getFilterSectionsData()

	const { clearDraftFilters, openConfirmationModal, currentModal } =
		useFilterStore()

	const isOpen = currentModal === 'filter'

	return (
		<ModalWindow
			isOpen={isOpen}
			onClose={openConfirmationModal}
			title={t('ui.filter')}
		>
			{data.map((section: FilterSectionProps, index: number) => (
				<React.Fragment key={index}>
					<Divider />
					<FilterSection
						title={section.title}
						category={section.category}
						options={section.options}
						columns={section.columns}
					/>
				</React.Fragment>
			))}
			<Divider />

			{/* Footer with buttons */}
			<Center
				as="footer"
				className="mt-10"
			>
				<div></div>
				<Button
					className="min-w-46"
					theme="primary"
					onClick={openConfirmationModal}
				>
					{t('ui.apply')}
				</Button>
				<Button
					theme="link"
					onClick={clearDraftFilters}
				>
					{t('ui.clearAllParameters')}
				</Button>
			</Center>
		</ModalWindow>
	)
}

export default FilterModal
