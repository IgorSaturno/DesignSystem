import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@igorsaturnino-ignite-ui/react'

export default {
  title: 'Typegraphy/Text',
  component: Text,

  args: {
    children: 'Example text',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      }
    },
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong',
    }
}
