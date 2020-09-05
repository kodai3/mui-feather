import React from 'react';
  import { Story, Meta } from '@storybook/react/types-6-0';
  import Icon from '../src/CornerLeftDown';

  export default {
    title: 'Icons/CornerLeftDown',
    component: Icon,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

  const Template: Story = () => <Icon />;

  export const CornerLeftDown = Template.bind({});
  