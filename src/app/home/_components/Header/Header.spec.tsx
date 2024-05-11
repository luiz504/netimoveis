import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe('Component: Header', () => {
  it('should render correctly', () => {
    render(<Header data-testid="header" />)
  })
  it.skip('should show Big Screen content when bellow 1024px screen width ', () => {
    render(<Header data-testid="header" />)

    const contentBigScreen = screen.getByTestId('content-big-screen')
    const contentSmallScreen = screen.getByTestId('content-small-screen')

    expect(contentBigScreen).not.toBeVisible()
    expect(contentSmallScreen).toBeVisible()

    /**
   * This test doesn't work as expected, with my attempts I was't able to make TW
  screen breakpoint to be computed correctly, I did the following tries:
   *   - I tried manipulate the global.innerWidth, global.window.innerWidth, 
   consoling the w.innerWidth, in the component it was changing, and the useMediaQuery
   was matching but the css classed wasting being applied`
   *   - I tried using vitest-matchmedia-mock lib too but it doesn't computed correctly as well

   I found that the RTL has its limitations, to do this kind of test, and maybe if its really 
   this kind test a requirement we should use some other tools like that emulate a browser.
   */
  })
})
