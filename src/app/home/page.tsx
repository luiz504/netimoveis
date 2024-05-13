import { Banner } from './_components/Banner'
import { BePartOfIt } from './_components/BePartOfIt'
import { BlogPosts } from './_components/BlogPosts'
import { PropertiesAnnounces } from './_components/PropertiesAnnounces'
import { TypeOfPropertiesPopular } from './_components/TypeOfProperties&Popular'

type Props = {
  searchParams: {
    announces_filter_city: string | undefined
    announces_page: string | undefined
  }
}
export default function Home({ searchParams }: Props) {
  const announcesFilterCity = searchParams.announces_filter_city
  const announcesPage = searchParams.announces_page
  return (
    <div>
      <Banner className="mb-20" />

      <PropertiesAnnounces
        announcesFilterCity={announcesFilterCity}
        announcesPage={announcesPage}
        className="mb-16"
      />

      <BlogPosts className="mb-[72px] lg:mb-[112px]" />
      <BePartOfIt className="mb-6 lg:mb-[128px]" />
      <TypeOfPropertiesPopular />
    </div>
  )
}
