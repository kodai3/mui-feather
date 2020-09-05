import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Icon from '../src/CornerUpLeft';

export default {
  title: 'Icons/CornerUpLeft',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = () => <Icon />;

export const CornerUpLeft = Template.bind({});
