import React from 'react'

import { Center } from '../Center'

export interface ModalWindowProps {
	isOpen: boolean
	onClose: () => void
	title: string
	children?: React.ReactNode
}

const ModalWindow: React.FC<ModalWindowProps> = ({
	isOpen,
	onClose,
	title = '',
	children
}) => {
	if (!isOpen) {
		return null
	}

	return (
		<div
			className="fixed inset-0 z-40 flex justify-center items-center"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
		>
			{/* Background overlay */}
			<div
				className="absolute inset-0 bg-opacity-50 backdrop-blur-md"
				onClick={onClose}
			></div>

			{/* Modal content */}
			<div className="relative bg-white rounded-2xl shadow-lg w-full mx-4 p-6 max-w-7xl max-h-[90vh] overflow-y-auto">
				<Center as="header">
					<div></div>
					<h2
						className="leading-none text-[#31393C] text-center flex-1"
						id="modal-title"
					>
						{title}
					</h2>
					<button
						className="text-gray-500 text-4xl cursor-pointer select-none hover:text-gray-700"
						onClick={onClose}
						aria-label="Close Modal"
						title="Close Modal"
						type="button"
					>
						×
					</button>
				</Center>

				<main>{children}</main>
			</div>
		</div>
	)
}

export default ModalWindow
