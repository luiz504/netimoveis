'use client'
import { FC, useCallback } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import {
  Select,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from './Select'

type Props = {
  items: string[]
}
export const CitySelector: FC<Props> = ({ items }) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const cityFilter = searchParams.get('announces_filter_city') || 'all'

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (!value || value === 'all') {
        params.delete(name)
      } else {
        params.set(name, value)
      }

      return params.toString()
    },
    [searchParams],
  )
  const handleSelect = (value: string) => {
    const url =
      pathname + '?' + createQueryString('announces_filter_city', value)
    router.push(url)
  }

  return (
    <Select value={cityFilter} onValueChange={(item) => handleSelect(item)}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Todas</SelectItem>
        {items?.map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
