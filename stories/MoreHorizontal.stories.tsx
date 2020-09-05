import React from 'react';
  import { Story, Meta } from '@storybook/react/types-6-0';
  import Icon from '../src/MoreHorizontal';

  export default {
    title: 'Icons/MoreHorizontal',
    component: Icon,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

  const Template: Story = () => <Icon />;

  export const MoreHorizontal = Template.bind({});
  