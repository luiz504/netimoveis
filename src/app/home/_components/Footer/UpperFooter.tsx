import { ComponentProps, FC } from 'react'

type Props = ComponentProps<'section'>
export const UpperFooter: FC<Props> = (props) => {
  return <section {...props}> PrimarySection </section>
}
