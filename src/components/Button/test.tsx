import { render, screen } from '@/utils/test-utils'
import Button from '.'

describe('<Menu />', () => {
  it('should render button as a link', () => {
    render(
      <Button as="a" href="/link">
        Button Link
      </Button>
    )
    expect(screen.getByRole('link', { name: /button link/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
