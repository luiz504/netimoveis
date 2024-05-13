import { GetFlatsResponse } from '~/app/api/flats/route'
import { buildApiUrl } from '~/utils/buildApiUrl'

type Params = {
  filterByCity?: string
  page?: number
}
export async function getFlats({ filterByCity, page }: Params = {}) {
  'use server'
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const url = buildApiUrl('/api/flats')
  const query = new URL(url)
  if (filterByCity) {
    query.searchParams.append('filterByCity', filterByCity)
  }
  if (page) {
    query.searchParams.append('page', page.toString())
  }

  const response = await fetch(query)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = (await response.json()) as GetFlatsResponse
  return data
}
