import React from 'react';
  import { Story, Meta } from '@storybook/react/types-6-0';
  import Icon from '../src/CornerLeftUp';

  export default {
    title: 'Icons/CornerLeftUp',
    component: Icon,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

  const Template: Story = () => <Icon />;

  export const CornerLeftUp = Template.bind({});
  