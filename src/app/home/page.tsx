import { Banner } from './_components/Banner'
import { BePartOfIt } from './_components/BePartOfIt'
import { TypeOfPropertiesPopular } from './_components/TypeOfProperties&Popular'

export default function Home() {
  return (
    <div>
      <Banner />
      <BePartOfIt className="mb-[62.5px] mt-[72px]" />
      <TypeOfPropertiesPopular />
    </div>
  )
}
