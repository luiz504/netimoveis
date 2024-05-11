'use client'
import { FC, useState } from 'react'
import Image from 'next/image'
import LocationIcon from 'public/location.svg'
import BedIcon from 'public/bed.svg'
import { cn } from '~/utils/cn'
import SearchIcon from 'public/search.svg'

export const Banner: FC = () => {
  const [inputValue, setInputValue] = useState('')
  return (
    <section className="relative flex max-h-[640px] justify-center">
      <Image
        src="/woman-coffee-smile.png"
        alt="Banner"
        width={1920}
        height={640}
        style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
      />
      <div className="absolute inset-0 hidden flex-col items-center lg:flex">
        <h1 className="mb-8 mt-[5%] text-3.5xl font-bold leading-10 text-white">
          Vende. Aluga. Conecta
        </h1>

        <div
          className={cn([
            'relative flex h-[78px] w-full max-w-[771px] items-center overflow-hidden',
            'rounded-full',
            'border border-white bg-white focus-within:border-gray-450',
          ])}
        >
          <label
            className={cn([
              'absolute bottom-0 left-0 right-[46%] top-0',
              'flex h-full flex-1 flex-col justify-center px-8',
              'rounded-[78px] focus-within:z-10 focus-within:bg-white focus-within:drop-shadow-[0_4px_16px_rgba(0,0,0,0.1)]',
            ])}
          >
            <div className="mb-1 flex items-center gap-1.5">
              <div className="flex size-6 items-center justify-center">
                <LocationIcon />
              </div>
              <span className="font-base font-bold text-gray-950">
                Localização
              </span>
            </div>
            <input
              placeholder="Qual é a Localização?"
              className="h-6 border-0 outline-none placeholder:text-gray-650"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>
          <hr
            className={cn([
              'h-[38px] border border-gray-400',
              'absolute left-[53%]',
            ])}
          />
          <div
            className={cn([
              'peer/bedroom',
              'absolute bottom-0 left-[51%] right-0 top-0',
              'flex items-center justify-between py-2.5 pl-10 pr-2.5',
              'focus-within:rounded-[78px] focus-within:bg-white focus-within:drop-shadow-[0_4px_16px_rgba(0,0,0,0.1)]',
            ])}
          >
            <label className="flex flex-1 flex-col">
              <div className="mb-1 flex items-center gap-1.5">
                <BedIcon />

                <span className="text-sm font-bold text-gray-950">
                  Nº de Quartos
                </span>
              </div>
              <button className="flex text-base text-gray-650 focus:outline-none">
                Quantos Quartos?
              </button>
            </label>
            <button
              className={cn([
                'flex h-[58px] min-w-[58px] items-center justify-center  rounded-[32px] bg-orange-400 px-[17px]',
              ])}
            >
              <SearchIcon />
              <div
                className={cn([
                  'grid grid-cols-[0] overflow-hidden transition-all duration-150',
                  {
                    'ml-2 grid-cols-[1fr] transition-all duration-150':
                      inputValue.length > 0,
                  },
                ])}
              >
                <span className="text-base font-bold text-white">Buscar</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
