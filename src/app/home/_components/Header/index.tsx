import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps, FC } from 'react'
import { cn } from '~/utils/cn'
import { AboutDropDown } from './AboutDropDown'

import BurgerMenuIcon from 'public/burger-menu.svg'
import ChevronDown from 'public/chevron-down.svg'

type Props = Omit<ComponentProps<'header'>, 'children'>
export const Header: FC<Props> = ({ className, ...props }) => {
  return (
    <header
      className={cn('flex min-h-16 justify-center px-4', className)}
      {...props}
    >
      <div
        data-testid="content-big-screen"
        className="hidden w-full max-w-312 flex-1 items-center justify-between lg:flex"
      >
        <div className="flex items-center gap-12">
          <Image
            src="/logo-laranja.svg"
            alt="Logo Netimóveis"
            width={169}
            height={42}
            className="h-[42px]"
            priority
          />
          <nav className="flex gap-9">
            <Link href={'/real-state-agencies'} className="px-1 text-gray-700">
              Imobiliárias
            </Link>
            <Link
              href={'/become-a-member'}
              className="whitespace-nowrap px-1 text-gray-700"
            >
              Quero me Associar
            </Link>

            <AboutDropDown className="flex items-center gap-1.5 whitespace-nowrap px-1 text-gray-700">
              Sobre <ChevronDown />
            </AboutDropDown>

            <Link href={'/blog'} className="px-1 text-gray-700">
              Blog
            </Link>
          </nav>
        </div>

        <div className="flex min-w-fit items-center gap-8 ">
          <Link
            href={'/advertise-property'}
            className={cn([
              'rounded-full px-4 py-1 text-base ',
              'border-[1.5px] border-purple-700 text-purple-700',
              'focus-visible:outline-none  focus-visible:ring-[1px] focus-visible:ring-purple-700 ',
            ])}
          >
            Anunciar Imóvel
          </Link>

          <Link href={'/login'} className="px-1 text-gray-700">
            Entrar
          </Link>
        </div>
      </div>
      {/** Small Screen */}
      <div
        data-testid="content-small-screen"
        className="flex max-w-172 flex-1 items-center justify-between lg:hidden"
      >
        <Image
          src="/logo-laranja.svg"
          alt="Logo Netimóveis"
          width={169}
          height={42}
          className="h-[42px]"
          priority
        />
        <button>
          <BurgerMenuIcon />
        </button>
      </div>
    </header>
  )
}
