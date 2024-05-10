import { ComponentProps, FC } from 'react'

type Props = Omit<ComponentProps<'header'>, 'children'>
export const Header: FC<Props> = (props) => {
  return <header {...props}>Header</header>
}
