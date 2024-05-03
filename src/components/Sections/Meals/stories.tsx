import { Meta, StoryObj } from '@storybook/react'
import Meals from '.'

export default {
  title: 'Meals',
  component: Meals,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {}
