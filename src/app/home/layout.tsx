import { FC, PropsWithChildren } from 'react'

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header>Test</header>
      {children}
    </>
  )
}

export default HomeLayout
