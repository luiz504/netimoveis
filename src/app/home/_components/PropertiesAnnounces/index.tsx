import { ComponentProps } from 'react'
import Link from 'next/link'
import { getCitiesWithAnnounces } from '~/use-cases/get-cities-with-announce'
import { getFlats } from '~/use-cases/get-flats'
import ExternalIcon from 'public/external-link.svg'
import { CitySelector } from './CitySelector'
import { AnnounceCard } from './CitySelector/AnnounceCard'
import { cn } from '~/utils/cn'
import { BtnsPreviousNext } from './BtnsPreviousNext'

type Props = {
  announcesFilterCity?: string
  announcesPage?: string
} & Omit<ComponentProps<'section'>, 'children'>
export async function PropertiesAnnounces({
  announcesFilterCity,
  announcesPage,
  className,
  ...rest
}: Props) {
  const cities = await getCitiesWithAnnounces()
  const { data, page, totalPages } = await getFlats({
    filterByCity: announcesFilterCity,
    page: announcesPage ? parseInt(announcesPage) : undefined,
  })
  const pageDots = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <section className={cn(['flex justify-center px-4', className])} {...rest}>
      <div className="flex w-full max-w-172 flex-col lg:max-w-312">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col  gap-3 ">
            <div className="flex items-center gap-1">
              <strong className="text-2xl text-gray-950">
                Novos Anúncios em
              </strong>
              <div className="flex gap-4">
                <CitySelector items={cities} />
              </div>
            </div>
            <Link href="" className="flex items-center gap-1">
              <span className="text-base text-blue-600">
                Ver todos os imóveis
              </span>
              <ExternalIcon />
            </Link>
          </div>
          <BtnsPreviousNext page={page} totalPages={totalPages} />
        </div>
        <div className="mb-6 flex w-full gap-6 overflow-x-auto lg:grid lg:grid-cols-4">
          {data?.map((item) => (
            <AnnounceCard
              key={item.Title}
              item={item}
              className="min-w-[312px] lg:min-w-[auto]"
            />
          ))}
        </div>
        <div className="flex justify-center gap-2.5">
          {pageDots.map((item) => (
            <div
              key={item}
              className={cn([
                'h-2 w-2 rounded-full bg-gray-400',
                item === page && 'bg-gray-800',
              ])}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
