import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Icon from '../src/PhoneForwarded';

export default {
  title: 'Icons/PhoneForwarded',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = () => <Icon />;

export const PhoneForwarded = Template.bind({});
