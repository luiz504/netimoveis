import { ComponentProps, FC } from 'react'
import { PropertyAnnounce } from '~/models/PropertyAnnounce'
import { cn } from '~/utils/cn'

type Props = {
  item: PropertyAnnounce
} & Omit<ComponentProps<'div'>, 'children'>

export const AnnounceCard: FC<Props> = ({ item, className, ...rest }) => {
  const value = Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    maximumFractionDigits: 0,
    style: 'currency',
  }).format(item.Price)

  return (
    <div
      className={cn(
        ['overflow-hidden rounded-2xl border border-gray-300'],
        className,
      )}
      {...rest}
    >
      <div className="flex h-[198px] w-full items-center justify-center bg-gray-300 text-gray-100">
        {item.City}
      </div>

      <div className="flex flex-col px-4 pb-6 pt-4">
        <strong className="mb-1 text-base tracking-tinny text-gray-1000">
          {item.Title}
        </strong>
        <span className="mb-3 text-sm text-gray-650">{item.Author}</span>

        <span className="mb-3 text-sm text-gray-900">
          {item.Rooms} Quarto{item.Rooms > 1 ? 's' : ''}
        </span>

        <div className="mb-3 flex flex-wrap items-center gap-1">
          {item.Tags.map((tag) => {
            return (
              <div
                key={tag}
                className="flex h-[19px] select-none items-center justify-center rounded-[27px] bg-gray-100 px-1.5 pt-0.5 text-xs capitalize leading-[15px] tracking-subtle text-blue-200"
              >
                {tag}
              </div>
            )
          })}
        </div>
        <strong className="text-xl font-bold text-orange-600">{value}</strong>
      </div>
    </div>
  )
}
