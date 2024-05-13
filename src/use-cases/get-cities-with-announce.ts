import { buildApiUrl } from '~/utils/buildApiUrl'

export async function getCitiesWithAnnounces() {
  const url = buildApiUrl('/api/cities-with-announces')

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const { data } = await response.json()
  return data as string[]
}
