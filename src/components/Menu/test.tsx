import { render, screen, fireEvent } from '@/utils/test-utils'
import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu mobile', () => {
    render(<Menu />)
    ///selecionar o MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    const menuIconElement = screen.getByLabelText(/open menu/i)
    const closeIconElement = screen.getByLabelText(/close menu/i)

    //verificar se o menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
    expect(closeIconElement).toHaveStyle({ display: 'none' })

    //clicar no botão de abrir o menu
    fireEvent.click(menuIconElement)
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')

    //verificar se o menu abriu
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })
    expect(closeIconElement).toHaveStyle({ display: 'block' })
    expect(menuIconElement).toHaveStyle({ display: 'none' })

    //clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(closeIconElement)
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')

    //verificar se o menu fechou
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
    expect(closeIconElement).toHaveStyle({ display: 'none' })
  })
})
