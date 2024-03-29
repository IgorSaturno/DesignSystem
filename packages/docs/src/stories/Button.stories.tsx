import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@igorsaturnino-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      }
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      }
    },
    disabled: {
      control: {
        type: 'boolean',
      }
    },
    onClick: {
      action: 'clicked',
    }
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant:'secondary',
    children:'Create new',
  }
}
export const tertiary: StoryObj<ButtonProps> = {
  args: {
    variant:'tertiary',
    children: 'cancel'
  }
}
export const Small: StoryObj<ButtonProps> = {
  args: {
    size:'small',
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight='bold' />
      </>
    )
  }
}


