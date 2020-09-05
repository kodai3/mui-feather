import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Icon from '../src/ArrowDown';

export default {
  title: 'Icons/ArrowDown',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = () => <Icon />;

export const ArrowDown = Template.bind({});
