import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Icon from '../src/Volume1';

export default {
  title: 'Icons/Volume1',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = () => <Icon />;

export const Volume1 = Template.bind({});
