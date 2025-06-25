import React from 'react'

import { useFilterStore } from '@/shared/store/FilterStore'
import { Checkbox, CheckboxProps, Group } from '@/shared/ui'

export interface FilterSectionProps {
	title: string
	options: CheckboxProps[]
	category: string
	columns?: number
}

export const FilterSection: React.FC<FilterSectionProps> = ({
	title,
	options,
	category,
	columns = 3
}) => {
	const { draftFilters, toggleDraftFilter } = useFilterStore()

	const handleChange = (id: string) => {
		toggleDraftFilter(category, id)
	}

	return (
		<fieldset className="mb-6 min-h-25">
			<legend className="text-lg font-medium mb-4 text-gray-800">
				{title}
			</legend>
			<Group columns={columns}>
				{options.map((option, index) => {
					const isChecked = draftFilters[category]?.includes(option.id) || false
					return (
						<Checkbox
							key={index}
							id={option.id}
							label={option.label}
							checked={isChecked}
							onChange={() => handleChange(option.id)}
						/>
					)
				})}
			</Group>
		</fieldset>
	)
}
