import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Component: Header', () => {
  it('should render correctly', () => {
    render(<Header />)
    expect(screen.getByText('logo')).toBeInTheDocument()
    expect(screen.getByTestId('input')).toBeInTheDocument()
  })
})
