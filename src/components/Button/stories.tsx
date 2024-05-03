import { Meta, StoryObj } from '@storybook/react'
import Button from '.'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    $buttonType: {
      control: 'select',
      options: ['full', 'outline', 'cta', 'form']
    }
  }
}
export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Try to free'
  }
}

export const asLink: Story = {
  render: (args) => <Button {...args} />,
  args: {
    children: 'Try to free',
    as: 'a'
  }
}
