import { render, screen } from '@testing-library/react'
import { Footer } from '.'
describe('Component: Footer', () => {
  it('should render correctly', () => {
    render(<Footer data-testid="footer" />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
