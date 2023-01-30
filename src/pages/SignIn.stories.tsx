import {Meta, StoryObj} from '@storybook/react'
import {within, userEvent} from '@storybook/testing-library'
import {expect} from '@storybook/jest'
import {SignIn} from './SignIn'

export default {
  title: 'Pages/Sign in',
  component: SignIn,
  args: {},
  argTypes: {}
} as Meta

export const Default: StoryObj = {
  play: ({canvasElement}) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'fernandab.bittencourt@gmail.com');
    userEvent.type(canvas.getByPlaceholderText('********'), '1234');

    userEvent.click(canvas.getByRole('button'))
  }
}


