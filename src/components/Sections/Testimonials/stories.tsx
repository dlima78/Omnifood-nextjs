import { Meta, StoryObj } from '@storybook/react'
import Testimonials from '.'

export default {
  title: 'Testimonials',
  component: Testimonials,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {}
