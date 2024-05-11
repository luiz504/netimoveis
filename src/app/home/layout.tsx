import { FC, PropsWithChildren } from 'react'
import { Header } from './_components/Header'
import { Footer } from './_components/Footer'

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header data-testid="header" />

      <main data-testid="main" className="flex flex-1 flex-col">
        {children}
      </main>

      <Footer data-testid="footer" />
    </>
  )
}

export default HomeLayout
