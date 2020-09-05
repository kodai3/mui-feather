import React from 'react';
  import { Story, Meta } from '@storybook/react/types-6-0';
  import Icon from '../src/PhoneIncoming';

  export default {
    title: 'Icons/PhoneIncoming',
    component: Icon,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

  const Template: Story = () => <Icon />;

  export const PhoneIncoming = Template.bind({});
  