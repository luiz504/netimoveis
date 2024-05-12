import Link from 'next/link'
import { ComponentProps, FC } from 'react'
import { cn } from '~/utils/cn'
import ArrowRightIcon from 'public/arrow-right.svg'
import ExternalLinkIcon from 'public/external-link.svg'
import { PostCard } from './PostCard'

type Props = Omit<ComponentProps<'section'>, 'children'>
export const BlogPosts: FC<Props> = ({ className, ...rest }) => {
  return (
    <section className={cn(['flex justify-center px-4', className])} {...rest}>
      <div className="flex w-full max-w-172 flex-col lg:max-w-312">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 lg:mb-12">
          <strong className="text-xl font-bold leading-[26px] text-gray-950 lg:text-[34px] lg:leading-10">
            Para compradores, vendedores ou curiosos :)
          </strong>
          <Link
            href="https://blog.netimoveis.com/"
            className="flex items-center gap-1"
          >
            <span className="text-base text-blue-600 lg:font-bold lg:text-gray-800">
              Ver mais no Blog
            </span>
            <ArrowRightIcon className="hidden lg:block" />
            <ExternalLinkIcon className="lg:hidden" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:justify-center md:grid-cols-2 lg:grid-cols-3">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </section>
  )
}
