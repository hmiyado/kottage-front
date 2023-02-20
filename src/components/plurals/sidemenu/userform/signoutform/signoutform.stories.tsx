import React from 'react'

import SignOutForm from './signoutform'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'sidemenu/userform/SignOutForm',
  component: SignOutForm,
  argTypes: {
    onSignOutClicked: {
      action: 'clicked',
    },
  },
} as ComponentMeta<typeof SignOutForm>

const Template: ComponentStory<typeof SignOutForm> = (args) => (
  <SignOutForm {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  screenName: 'ScreenName',
  accountLinks: [],
}

export const GoogleLinking = Template.bind({})
GoogleLinking.args = {
  screenName: 'ScreenName',
  accountLinks: [
    {
      service: 'google',
      linking: true,
    },
  ],
}

export const GoogleNotLinking = Template.bind({})
GoogleNotLinking.args = {
  screenName: 'ScreenName',
  accountLinks: [
    {
      service: 'google',
      linking: false,
    },
  ],
}
