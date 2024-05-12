import { Banner } from './_components/Banner'
import { BePartOfIt } from './_components/BePartOfIt'
import { BlogPosts } from './_components/BlogPosts'
import { TypeOfPropertiesPopular } from './_components/TypeOfProperties&Popular'

export default function Home() {
  return (
    <div>
      <Banner />
      <BlogPosts className="mb-[72px] lg:mb-[112px]" />
      <BePartOfIt className="mb-6 lg:mb-[128px]" />
      <TypeOfPropertiesPopular />
    </div>
  )
}
