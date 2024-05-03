import { render } from '@/utils/test-utils'
import Hero from '.'

describe('<Hero />', () => {
  it('should render the hero', () => {
    render(<Hero />)
  })
})
