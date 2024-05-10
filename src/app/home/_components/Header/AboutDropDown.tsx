'use client'
import { ComponentProps, FC } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { cn } from '~/utils/cn'
import Link from 'next/link'

type Props = ComponentProps<'button'>
export const AboutDropDown: FC<Props> = (props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label="Opções sobre a aplicação" {...props} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={cn([
            'min-w-40 rounded-md bg-white p-2  will-change-[opacity,transform]',
            'flex flex-col gap-1',
            'shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]',
            'data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade',
          ])}
          sideOffset={5}
        >
          <DropdownMenu.Item asChild>
            <Link
              href={'/about'}
              className="flex justify-center px-4 py-1 text-gray-700"
            >
              Sobre a Netimóveis
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Link
              href={'/about'}
              className="flex justify-center px-4 py-1 text-gray-700"
            >
              Como funciona
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Link
              href={'/about'}
              className="flex justify-center px-4 py-1 text-gray-700"
            >
              Contato
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Link
              href={'/privacy-policy'}
              className="flex justify-center px-4 py-1 text-gray-700"
            >
              Assessoria de imprensa
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
