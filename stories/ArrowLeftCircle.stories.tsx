import React from 'react';
  import { Story, Meta } from '@storybook/react/types-6-0';
  import Icon from '../src/ArrowLeftCircle';

  export default {
    title: 'Icons/ArrowLeftCircle',
    component: Icon,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

  const Template: Story = () => <Icon />;

  export const ArrowLeftCircle = Template.bind({});
  