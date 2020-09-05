import React from 'react';
  import { Story, Meta } from '@storybook/react/types-6-0';
  import Icon from '../src/Tool';

  export default {
    title: 'Icons/Tool',
    component: Icon,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

  const Template: Story = () => <Icon />;

  export const Tool = Template.bind({});
  