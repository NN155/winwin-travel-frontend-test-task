export const fetchFilters = async () => {
	const response = await fetch('/src/shared/temp/filterData.json')

	if (!response.ok) {
		throw new Error('Failed to fetch filters')
	}

	return response.json()
}
