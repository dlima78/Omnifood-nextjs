import { Meta, StoryObj } from '@storybook/react'
import Hero from '.'

export default {
  title: 'Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {}
