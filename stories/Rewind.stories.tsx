import React from 'react';
  import { Story, Meta } from '@storybook/react/types-6-0';
  import Icon from '../src/Rewind';

  export default {
    title: 'Icons/Rewind',
    component: Icon,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

  const Template: Story = () => <Icon />;

  export const Rewind = Template.bind({});
  