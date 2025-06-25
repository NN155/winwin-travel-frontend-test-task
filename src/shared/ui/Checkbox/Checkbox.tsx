import React from 'react'

export interface CheckboxProps {
	label: string
	id: string
	checked?: boolean
	onChange?: (checked: boolean) => void
	disabled?: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({
	label,
	id,
	checked,
	onChange,
	disabled
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.checked)
	}

	return (
		<label
			className="checkbox flex items-center cursor-pointer"
			htmlFor={id}
		>
			<input
				type="checkbox"
				id={id}
				checked={checked}
				onChange={handleChange}
				disabled={disabled}
				className="sr-only"
			/>
			<img
				src={
					checked
						? '/assets/icons/checkbox-checked.svg'
						: '/assets/icons/checkbox.svg'
				}
				alt="Checkbox Icon"
				className="w-5 h-5 cursor-pointer select-none mr-4"
			/>
			<span className="text-body-6 gray-500">{label}</span>
		</label>
	)
}

export default Checkbox
