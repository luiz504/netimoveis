import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps, FC } from 'react'
import { cn } from '~/utils/cn'

type Props = ComponentProps<'section'>
export const UpperFooter: FC<Props> = ({ className, ...rest }) => {
  return (
    <section
      className={cn(['flex justify-center bg-gray-150 px-4 py-12', className])}
      {...rest}
    >
      <div className="flex w-full max-w-172 flex-wrap gap-8 md:max-w-172  md:justify-between lg:max-w-312">
        {/** About */}
        <div className="flex flex-col gap-6">
          <strong className="text-base font-bold tracking-tinny text-blue-800">
            A Netimóveis
          </strong>

          <nav className="flex flex-col gap-3">
            <Link
              href={'https://www.netimoveis.com/quem-somos#a-netimoveis'}
              className="flex self-start text-base text-gray-700 outline-offset-4"
            >
              Quem somos
            </Link>
            <Link
              href={'https://www.netimoveis.com/quem-somos#como-funciona'}
              className="flex self-start text-base text-gray-700 outline-offset-4"
            >
              Como funciona
            </Link>
            <Link
              href={'https://www.netimoveis.com/quem-somos#parceiros'}
              className="flex self-start text-base text-gray-700 outline-offset-4"
            >
              Seja um parceiro
            </Link>
            <Link
              href={'https://www.netimoveis.com/faca-parte'}
              className="flex self-start text-base text-gray-700 outline-offset-4"
            >
              Quero me associar
            </Link>
            <Link
              href={
                'https://www.netimoveis.com/quem-somos#assessoria-de-imprensa'
              }
              className="flex self-start text-base text-gray-700 outline-offset-4"
            >
              Acessoria de imprensa
            </Link>
            <Link
              href={'https://www.netimoveis.com/solucoes-corporativas'}
              className="flex self-start text-base text-gray-700 outline-offset-4"
            >
              Soluções Corporativas
            </Link>
            <Link
              href={'https://www.netimoveis.com/covid-19'}
              className="flex self-start text-base text-gray-700 outline-offset-4"
            >
              Covid-19
            </Link>
          </nav>
        </div>

        {/** Resources */}
        <div className="flex flex-col gap-6">
          <strong className="text-base font-bold tracking-tinny text-blue-800">
            Recursos
          </strong>

          <nav className="flex flex-col gap-3">
            <Link
              href={'https://www.netimoveis.com/venda'}
              className="flex self-start text-base text-gray-700 outline-offset-4"
            >
              Comprar
            </Link>
            <Link
              href={'https://www.netimoveis.com/locacao'}
              className="flex self-start text-base text-gray-700 outline-offset-4"
            >
              Alugar
            </Link>
            <Link
              href={'https://www.netimoveis.com/venda?transacao=venda&flgNovos'}
              className="flex self-start text-base text-gray-700 outline-offset-4"
            >
              Lançamentos
            </Link>
            <Link
              href={'https://www.netimoveis.com/faca-parte'}
              className="flex self-start text-base text-gray-700 outline-offset-4"
            >
              Anunciar Imóvel
            </Link>
            <Link
              href={'https://www.netimoveis.com/anuncie'}
              className="flex self-start text-base text-gray-700 outline-offset-4"
            >
              Simular Financiamento
            </Link>
            <Link
              href={'https://www.netimoveis.com/associadas'}
              className="flex self-start text-base text-gray-700 outline-offset-4"
            >
              Imobiliárias
            </Link>
            <Link
              href={'https://blog.netimoveis.com/'}
              className="flex self-start text-base text-gray-700 outline-offset-4"
            >
              Blog
            </Link>
          </nav>
        </div>

        {/** Contact */}
        <div className="flex flex-col gap-6">
          <strong className="text-base font-bold tracking-tinny text-blue-800">
            Contato
          </strong>

          <nav className="flex flex-col gap-3">
            <Link
              target="_blank"
              href={'https://www.netimoveis.com/quem-somos#a-netimoveis'}
              className="flex self-start text-base text-gray-700 outline-offset-4"
            >
              Fale Conosco
            </Link>
            <Link
              target="_blank"
              href={'https://www.netimoveis.com/quem-somos#como-funciona'}
              className="flex self-start text-base text-gray-700 outline-offset-4"
            >
              Perguntas Frequentes
            </Link>
            <Link
              target="_blank"
              href={'https://www.netimoveis.com/quem-somos#parceiros'}
              className="flex self-start text-base text-gray-700 outline-offset-4"
            >
              Suporte
            </Link>
          </nav>
        </div>

        {/** Our Apps */}
        <div className="flex flex-col gap-6">
          <strong className="text-base font-bold tracking-tinny text-blue-800">
            Nossos Aplicativos
          </strong>

          <nav className="flex flex-col gap-3">
            <Link
              href={''}
              className="flex self-start text-base text-gray-700 outline-offset-4"
            >
              Loc Fácil Netimóveis
            </Link>
            <Link
              href={''}
              className="flex self-start text-base text-gray-700 outline-offset-4"
            >
              Pro Imob Netimóveis
            </Link>
          </nav>

          <div className="flex gap-2">
            <Image
              src={'/apple-store-available.png'}
              width={108}
              height={32}
              alt="Disponivel na Apple store"
            />
            <Image
              src={'/google-play-available.png'}
              width={108}
              height={32}
              alt="Disponivel na Apple store"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
