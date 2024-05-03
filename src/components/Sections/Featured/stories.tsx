import { Meta, StoryObj } from '@storybook/react'
import Featured from '.'

export default {
  title: 'Featured',
  component: Featured,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {}
