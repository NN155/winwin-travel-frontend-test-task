type DividerProps = React.ComponentProps<'hr'>

const Divider: React.FC<DividerProps> = props => (
	<hr
		className="border-1 border-gray-200 my-4"
		{...props}
	/>
)

export default Divider
