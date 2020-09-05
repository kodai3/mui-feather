import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Icon from '../src/ArrowRightCircle';

export default {
  title: 'Icons/ArrowRightCircle',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = () => <Icon />;

export const ArrowRightCircle = Template.bind({});
