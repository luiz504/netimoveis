import { ComponentProps, FC } from 'react'

type Props = Omit<ComponentProps<'footer'>, 'children'>
export const Footer: FC<Props> = (props) => {
  return <footer {...props}>Footer</footer>
}
