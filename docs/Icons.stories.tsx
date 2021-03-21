import { SvgIconProps } from '@material-ui/core/SvgIcon';
import * as React from 'react';
import * as iconComponents from '../src';
import manifest from './manifest.json';

const allIcons = Object.values(manifest)
  .map((value) => value)
  .reduce((a, b) => a.concat(b), []);

export default {
  title: 'Icon/Basic',
  argTypes: {
    component: { control: { type: 'select', options: allIcons } },
    fontSize: { control: { type: 'select', options: ['default', 'small', 'large'] } },
    color: {
      control: {
        type: 'select',
        options: ['inherit', 'primary', 'secondary', 'disabled', 'error'],
      },
    },
  },
};

interface Props extends SvgIconProps {
  component: keyof typeof manifest;
}

export const Control = (args: Props) => {
  const Component = iconComponents[args.component];
  return <Component fontSize={args.fontSize} color={args.color} />;
};

Control.args = { component: 'User', fontSize: 'default', color: 'inherit' };
