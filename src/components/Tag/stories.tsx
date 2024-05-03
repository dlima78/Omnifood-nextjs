import { Meta, StoryObj } from '@storybook/react'
import Tag from '.'

export default {
  title: 'Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    $type: {
      control: {
        type: 'select',
        options: ['vegetarian', 'vegan', 'paleo']
      }
    }
  }
} as Meta

type Story = StoryObj<typeof Tag>

export const Default: Story = {
  args: {
    children: 'tag type'
  }
}
