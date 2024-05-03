import { Meta, StoryObj } from '@storybook/react'

import { CheckmarkIcon } from './styles'
import Button from '@/components/Button'
import Banner from '.'

export default {
  title: 'Banner',
  component: Banner,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['starter', 'complete']
      }
    }
  },
  args: {
    name: 'Starter',
    price: 9.99,
    description: "per month. That's just $11 per meal",
    list: [
      {
        icon: <CheckmarkIcon />,
        item: '1 meal every day'
      },
      {
        icon: <CheckmarkIcon />,
        item: 'Order 24/7'
      },
      {
        icon: <CheckmarkIcon />,
        item: 'Delivery is free'
      },
      {
        icon: <CheckmarkIcon />
      }
    ],
    button: <Button>Start eating well</Button>
  }
} as Meta

type Story = StoryObj<typeof Banner>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '50rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  )
}
