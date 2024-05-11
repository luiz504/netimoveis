import { ComponentProps, FC } from 'react'
import Link from 'next/link'

import LogoFull from 'public/logo-full.svg'
import InstagramIcon from 'public/instagram-icon.svg'
import FacebookIcon from 'public/facebook-icon.svg'
import LinkedinIcon from 'public/linkedin-icon.svg'
import YoutubeIcon from 'public/youtube-icon.svg'

import { cn } from '~/utils/cn'
type Props = ComponentProps<'section'>
export const LowerFooter: FC<Props> = ({ className, ...rest }) => {
  return (
    <section
      className={cn([
        'flex min-h-16 items-center justify-center bg-orange-400 px-4 py-3',
        className,
      ])}
      {...rest}
    >
      <div className="flex w-full max-w-172  flex-wrap justify-center gap-4 sm:justify-between lg:max-w-312">
        <div className="flex flex-grow justify-center sm:justify-start">
          <LogoFull class="text-white" width={153} height={38} />
        </div>

        <div className="flex flex-grow flex-col items-center gap-4  sm:gap-2">
          <p className="text-center text-xs leading-[15px] tracking-subtle text-white ">
            © Copyright 2021 Netimóveis Brasil SA. Todos os direitos
            reservados.
          </p>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              target="_blank"
              href={'https://www.netimoveis.com/politica-privacidade'}
              className="flex items-center text-xs leading-[15px] tracking-subtle text-white"
            >
              Política de privacidade
            </Link>
            <Link
              target="_blank"
              href={'https://www.netimoveis.com/termos-de-uso'}
              className="flex items-center text-xs leading-[15px] tracking-subtle text-white"
            >
              Termos de uso
            </Link>
            <div className="flex gap-8">
              <Link
                target="_blank"
                href={
                  'https://www.netimoveis.com/lei-geral-de-protecao-de-dados'
                }
                className="flex items-center text-xs leading-[15px] tracking-subtle text-white"
              >
                LGPD
              </Link>
              <span className="flex items-center text-xs leading-[15px] tracking-subtle text-white">
                Versão: 25/10/2021
              </span>
            </div>
          </nav>
        </div>

        <nav className="flex flex-grow content-center items-center justify-center gap-8 lg:justify-end">
          <Link target="_blank" href="https://www.instagram.com/netimoveis/">
            <InstagramIcon />
          </Link>
          <Link target="_blank" href="https://www.facebook.com/Netimoveis/">
            <FacebookIcon />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/netimoveis/"
          >
            <LinkedinIcon />
          </Link>
          <Link
            target="_blank"
            href="https://www.youtube.com/user/redenetimoveisbr"
          >
            <YoutubeIcon />
          </Link>
        </nav>
      </div>
    </section>
  )
}
