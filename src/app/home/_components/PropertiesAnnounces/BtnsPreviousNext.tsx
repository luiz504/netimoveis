'use client'
import { ComponentProps, FC, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '~/utils/cn'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Props = {
  page: number
  totalPages: number
} & Omit<ComponentProps<'div'>, 'children'>

export const BtnsPreviousNext: FC<Props> = ({
  page,
  totalPages,
  className,
  ...rest
}) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (!value) {
        params.delete(name)
      } else {
        params.set(name, value)
      }

      return params.toString()
    },
    [searchParams],
  )
  const handleSelect = (value: number) => {
    const url =
      pathname + '?' + createQueryString('announces_page', String(value))
    router.push(url)
  }
  return (
    <div className={cn(['flex gap-3', className])} {...rest}>
      <button
        className={cn([
          'group',
          'flex size-10 items-center justify-center rounded-full border-[0.83px] border-gray-450',
          'disabled:border-[#E1E5E9]',
        ])}
        disabled={page <= 1}
        onClick={() => handleSelect(page - 1)}
      >
        <ChevronLeft
          size={20}
          className="stroke-gray-950 group-disabled:stroke-[#E1E5E9]"
        />
      </button>
      <button
        className={cn([
          'group',
          'flex size-10 items-center justify-center rounded-full border-[0.83px] border-gray-450',
          'disabled:border-[#E1E5E9]',
        ])}
        disabled={page >= totalPages}
        onClick={() => handleSelect(page + 1)}
      >
        <ChevronRight
          size={20}
          className="stroke-gray-950 group-disabled:stroke-[#E1E5E9]"
        />
      </button>
    </div>
  )
}
