import { Meta, StoryObj } from '@storybook/react'
import Pricing from '.'

export default {
  title: 'Pricing',
  component: Pricing,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {}
