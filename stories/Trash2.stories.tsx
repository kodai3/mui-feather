import React from 'react';
  import { Story, Meta } from '@storybook/react/types-6-0';
  import Icon from '../src/Trash2';

  export default {
    title: 'Icons/Trash2',
    component: Icon,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

  const Template: Story = () => <Icon />;

  export const Trash2 = Template.bind({});
  