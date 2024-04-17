import { render } from '@testing-library/react'
import Logo from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Logo />)
  })
})
