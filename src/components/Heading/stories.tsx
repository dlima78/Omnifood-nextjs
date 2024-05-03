import { Meta, StoryObj } from '@storybook/react'
import Heading from '.'

const meta: Meta<typeof Heading> = {
  title: 'Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    type: {
      control: 'select'
    }
  }
}

export default meta

type Story = StoryObj<typeof Heading>

export const Primary: Story = {
  args: {
    children: 'H1 - Primary',
    type: 'primary'
  }
}
export const Secondary: Story = {
  args: {
    children: 'H2 - Secondary',
    type: 'secondary'
  }
}
export const Tertiary: Story = {
  args: {
    children: 'H3 - Tertiary',
    type: 'tertiary'
  }
}
