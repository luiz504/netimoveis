import { FC } from 'react'
import ClockIcon from 'public/clock.svg'
export const PostCard: FC = () => {
  return (
    <div>
      <div className="mb-6 h-[252px] w-full rounded-2xl bg-slate-400" />
      <div className="mb-4 flex items-center gap-4">
        <div className="flex items-center gap-1">
          <ClockIcon />
          <span className="text-base text-gray-650">x Min de Leitura</span>
        </div>
        <span className="text-base text-orange-600">Mundo Netimóveis</span>
      </div>
      <p className="line-clamp-3 text-2xl font-bold text-gray-900">
        ENCONTRO NETIMÓVEIS BRASIL – N CONNECTIONS 2021: A FORÇA DOS NEGÓCIOS EM
        REDE
      </p>
    </div>
  )
}
