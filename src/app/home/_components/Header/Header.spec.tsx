import { render, screen } from '@testing-library/react'
import { Header } from '.'
describe('Component: Header', () => {
  it('should render correctly', () => {
    render(<Header data-testid="header" />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })
})
