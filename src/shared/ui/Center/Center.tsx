import React, {
	ElementType,
	ReactNode,
	useEffect,
	useRef,
	useState
} from 'react'

interface CenterProps {
	children: [ReactNode, ReactNode, ReactNode]
	as?: ElementType
	className?: string
}

const Center: React.FC<CenterProps> = ({
	children,
	as: Component = 'div',
	className
}) => {
	const rightRef = useRef<HTMLDivElement>(null)
	const [leftWidth, setLeftWidth] = useState(0)

	useEffect(() => {
		if (rightRef.current) {
			setLeftWidth(rightRef.current.offsetWidth)
		}
	}, [children[2]])

	return (
		<Component
			className={`grid grid-cols-[auto_1fr_auto] items-center mb-4 ${className}`}
		>
			<div style={{ width: leftWidth }}>{children[0]}</div>
			<div className="text-center">{children[1]}</div>
			<div
				ref={rightRef}
				className="justify-self-end"
			>
				{children[2]}
			</div>
		</Component>
	)
}

export default Center
