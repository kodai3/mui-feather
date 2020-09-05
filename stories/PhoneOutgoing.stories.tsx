import React from 'react';
  import { Story, Meta } from '@storybook/react/types-6-0';
  import Icon from '../src/PhoneOutgoing';

  export default {
    title: 'Icons/PhoneOutgoing',
    component: Icon,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

  const Template: Story = () => <Icon />;

  export const PhoneOutgoing = Template.bind({});
  