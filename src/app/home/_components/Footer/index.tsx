import { ComponentProps, FC } from 'react'
import { UpperFooter } from './UpperFooter'
import { LowerFooter } from './LowerFooter'

type Props = Omit<ComponentProps<'footer'>, 'children'>
export const Footer: FC<Props> = (props) => {
  return (
    <footer {...props}>
      <UpperFooter />
      <LowerFooter />
    </footer>
  )
}
