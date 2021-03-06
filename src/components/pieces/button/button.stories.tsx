import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './button'

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const NoIcon = Template.bind({})
NoIcon.args = {
  text: 'BUTTON',
}

export const Disabled = Template.bind({})
Disabled.args = {
  text: 'BUTTON',
  disabled: true,
}
