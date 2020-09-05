import React from 'react';
  import { Story, Meta } from '@storybook/react/types-6-0';
  import Icon from '../src/Linkedin';

  export default {
    title: 'Icons/Linkedin',
    component: Icon,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

  const Template: Story = () => <Icon />;

  export const Linkedin = Template.bind({});
  