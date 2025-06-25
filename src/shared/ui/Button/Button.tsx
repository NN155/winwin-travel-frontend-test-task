import React from 'react'

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode
	className?: string
	theme?: 'primary' | 'transparent' | 'link'
}

const Button: React.FC<ButtonProps> = ({
	children,
	className,
	theme = 'primary',
	...rest
}) => {
	let buttonClass: string | undefined
	switch (theme) {
		case 'primary': {
			buttonClass = 'brand-200 text-white'
			break
		}
		case 'transparent': {
			buttonClass = 'bg-transparent border-gray-200 border-2 border gray-400'
			break
		}
		case 'link': {
			buttonClass = 'bg-transparent underline underline-offset-3 primary-100'
			break
		}
		default: {
			const _exhaustiveCheck: never = theme
			return _exhaustiveCheck
		}
	}

	return (
		<button
			className={`px-4 py-2 rounded-2xl h-16 cursor-pointer ${buttonClass} ${className}`}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
