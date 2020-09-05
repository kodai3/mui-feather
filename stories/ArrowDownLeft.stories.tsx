import React from 'react';
  import { Story, Meta } from '@storybook/react/types-6-0';
  import Icon from '../src/ArrowDownLeft';

  export default {
    title: 'Icons/ArrowDownLeft',
    component: Icon,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

  const Template: Story = () => <Icon />;

  export const ArrowDownLeft = Template.bind({});
  