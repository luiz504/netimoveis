import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps, FC } from 'react'
import { cn } from '~/utils/cn'

type Props = Omit<ComponentProps<'section'>, 'children'>
export const BePartOfIt: FC<Props> = ({ className, ...rest }) => {
  return (
    <section
      className={cn(['flex justify-center lg:px-4', className])}
      {...rest}
    >
      <div
        className={cn([
          'relative flex flex-col lg:flex-row',
          'min-h-[328px] w-full  max-w-312',
          'overflow-hidden  bg-blue-950',
          'lg:rounded-2xl ',
        ])}
      >
        <div className="z-10 flex flex-col px-4 pb-4 pt-10 lg:pb-10 lg:pl-16">
          <div className="mb-4 w-fit rounded-full border border-orange-600 px-4 py-1">
            <span className="text-sm text-white">Para Empresas</span>
          </div>

          <strong className="mb-6 text-2xl font-bold text-white">
            Faça parte da Netimóveis
          </strong>
          <p className="mb-8 text-xl leading-[26px] text-gray-450">
            É uma empresa ou rede de imobiliárias? Associe-se e alcance um
            próximo patamar de eficiência e tecnologia.
          </p>

          <div className="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-10">
            <Link
              href={'http://localhost:3000/become-a-member'}
              className="w-fit rounded-[10px] bg-white px-4 py-3 text-base font-semibold text-orange-600"
            >
              Mais Sobre se Associar
            </Link>

            <Link
              href=""
              className="h-[22px] w-fit border-b border-gray-500 text-sm text-white outline-offset-4"
            >
              Conheça Nossos Produtos
            </Link>
          </div>
        </div>
        <Image
          src="/be-part-of-it.png"
          alt="mão com peça de quebra-cabeça"
          width={604}
          height={352}
          className="hidden lg:block"
        />
        <Image
          src="/ba-part-of-it-vertical.png"
          alt="mão com peça de quebra-cabeça"
          width={375}
          height={617}
          className="max-h-[454px] w-full object-cover object-top lg:hidden"
        />
      </div>
    </section>
  )
}
