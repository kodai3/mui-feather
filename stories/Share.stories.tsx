import React from 'react';
  import { Story, Meta } from '@storybook/react/types-6-0';
  import Icon from '../src/Share';

  export default {
    title: 'Icons/Share',
    component: Icon,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

  const Template: Story = () => <Icon />;

  export const Share = Template.bind({});
  