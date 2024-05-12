'use client'
import { ComponentProps, FC } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { cn } from '~/utils/cn'
import Link from 'next/link'

type Props = Omit<ComponentProps<'section'>, 'children'>
export const TypeOfPropertiesPopular: FC<Props> = ({ className, ...rest }) => {
  return (
    <section
      className={cn([' flex justify-center px-4 pt-6', className])}
      {...rest}
    >
      <Tabs.Root
        defaultValue="type_of_properties"
        className="w-full max-w-172 lg:max-w-312"
      >
        <Tabs.List className="no-scrollbar flex min-h-1 overflow-x-auto overflow-y-hidden border-b border-gray-300">
          <Tabs.Trigger
            value="type_of_properties"
            className={cn([
              'group relative flex flex-col p-4',
              'outline-2 focus-within:outline-orange-500',
            ])}
          >
            <span
              className={cn([
                'whitespace-nowrap text-sm font-semibold leading-[18px] text-gray-600',
                'group-data-[state=active]:text-orange-500',
              ])}
            >
              Tipos de Propriedades
            </span>
            <div
              className={cn([
                'absolute -bottom-[1px] left-0 right-0 h-0.5',
                'bg-white',
                'group-data-[state=active]:bg-orange-500',
              ])}
            />
          </Tabs.Trigger>
          <Tabs.Trigger
            value="popular_for_sell"
            className={cn([
              'group relative flex flex-col p-4',
              'outline-2 focus-within:outline-orange-500',
            ])}
          >
            <span
              className={cn([
                'whitespace-nowrap text-sm font-semibold leading-[18px] text-gray-600',
                'group-data-[state=active]:text-orange-500',
              ])}
            >
              Populares para Venda
            </span>
            <div
              className={cn([
                'absolute -bottom-[1px] left-0 right-0 h-0.5',
                'bg-white',
                'group-data-[state=active]:bg-orange-500',
              ])}
            />
          </Tabs.Trigger>
          <Tabs.Trigger
            value="popular_for_rent"
            className={cn([
              'group relative flex flex-col p-4',
              'outline-2 focus-within:outline-orange-500',
            ])}
          >
            <span
              className={cn([
                'whitespace-nowrap text-sm font-semibold leading-[18px] text-gray-600',
                'group-data-[state=active]:text-orange-500',
              ])}
            >
              Populares para Locação
            </span>
            <div
              className={cn([
                'absolute -bottom-[1px] left-0 right-0 h-0.5',
                'bg-white',
                'group-data-[state=active]:bg-orange-500',
              ])}
            />
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content
          value="type_of_properties"
          className="flex-wrap gap-12 pb-12 pt-8 outline-none data-[state=active]:flex"
          tabIndex={-1}
        >
          <div className="flex flex-1 flex-col gap-4">
            <strong className="text-base font-bold tracking-tinny text-gray-700">
              Alugar
            </strong>
            <nav className="flex flex-col gap-3">
              <Link
                href=""
                className="flex w-fit whitespace-nowrap text-sm text-gray-700 outline-offset-4"
              >
                Apartamentos
              </Link>
              <Link
                href=""
                className="flex w-fit whitespace-nowrap text-sm text-gray-700 outline-offset-4"
              >
                Casas
              </Link>
              <Link
                href=""
                className="flex w-fit whitespace-nowrap text-sm text-gray-700 outline-offset-4"
              >
                Terrenos
              </Link>
              <Link
                href=""
                className="flex w-fit whitespace-nowrap text-sm text-gray-700 outline-offset-4"
              >
                Lojas
              </Link>
            </nav>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <strong className="text-base font-bold tracking-tinny text-gray-700">
              Comprar
            </strong>
            <nav className="flex flex-col gap-3">
              <Link
                href=""
                className="flex w-fit whitespace-nowrap text-sm text-gray-700 outline-offset-4"
              >
                Imóv. em Condomínios
              </Link>
              <Link
                href=""
                className="flex w-fit whitespace-nowrap text-sm text-gray-700 outline-offset-4"
              >
                Casas à venda
              </Link>
              <Link
                href=""
                className="flex w-fit whitespace-nowrap text-sm text-gray-700 outline-offset-4"
              >
                Comprar terrenos
              </Link>
              <Link
                href=""
                className="flex w-fit whitespace-nowrap text-sm text-gray-700 outline-offset-4"
              >
                Lançamentos
              </Link>
            </nav>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <strong className="text-base font-bold tracking-tinny text-gray-700">
              Comercial
            </strong>
            <nav className="flex flex-col gap-3">
              <Link
                href=""
                className="flex w-fit whitespace-nowrap text-sm text-gray-700 outline-offset-4"
              >
                imóveis com escritório
              </Link>
              <Link
                href=""
                className="flex w-fit whitespace-nowrap text-sm text-gray-700 outline-offset-4"
              >
                Prédio comercial
              </Link>
              <Link
                href=""
                className="flex w-fit whitespace-nowrap text-sm text-gray-700 outline-offset-4"
              >
                Galpão de Armazenamento
              </Link>
              <Link
                href=""
                className="flex w-fit whitespace-nowrap text-sm text-gray-700 outline-offset-4"
              >
                Salão de Eventos
              </Link>
            </nav>
          </div>
          <div className="flex-1" />
        </Tabs.Content>

        <Tabs.Content
          value="popular_for_sell"
          className="flex-wrap gap-12 pb-12 pt-8 outline-none data-[state=active]:flex"
        >
          <div className="flex flex-1 items-center justify-center py-12 text-base text-gray-700">
            Section under development...
          </div>
        </Tabs.Content>

        <Tabs.Content
          value="popular_for_rent"
          className="flex-wrap gap-12 pb-12 pt-8 outline-none data-[state=active]:flex"
        >
          <div className="flex flex-1 items-center justify-center py-12 text-base text-gray-700">
            Section under development...
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </section>
  )
}
