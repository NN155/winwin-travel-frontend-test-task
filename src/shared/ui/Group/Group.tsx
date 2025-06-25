import React from 'react'

export interface GroupProps {
	children: React.ReactNode
	className?: string
	columns?: number
}

const Group: React.FC<GroupProps> = ({
	children,
	className = '',
	columns = 1
}) => {
	const childrenArray = React.Children.toArray(children)
	const columnsArray: React.ReactNode[][] = Array.from(
		{ length: columns },
		() => []
	)

	childrenArray.forEach((child, index) => {
		const colIndex = Math.floor(
			index / Math.ceil(childrenArray.length / columns)
		)
		columnsArray[colIndex].push(child)
	})
	let columnsClass: string | undefined

	//Temp solution for Tailwind CSS grid columns problem
	switch (columns) {
		case 1:
			columnsClass = 'grid-cols-1'
			break
		case 2:
			columnsClass = 'grid-cols-2'
			break
		case 3:
			columnsClass = 'grid-cols-3'
			break
		default:
			columnsClass = `grid-cols-${columns}`
			break
	}

	return (
		<div className={`grid ${columnsClass} ${className}`}>
			{columnsArray.map((col, i) => (
				<div
					key={i}
					className="space-y-4"
				>
					{col}
				</div>
			))}
		</div>
	)
}

export default Group
