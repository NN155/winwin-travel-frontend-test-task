import { useQuery } from '@tanstack/react-query'

import { fetchFilters } from './filterApi'
import type { FilterItem } from './types'

interface FilterDataResponse {
	filterItems: FilterItem[]
}

export const useFilters = () => {
	return useQuery<FilterDataResponse>({
		queryKey: ['filters'],
		queryFn: fetchFilters
	})
}
