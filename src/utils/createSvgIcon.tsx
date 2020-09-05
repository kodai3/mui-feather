// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/utils/createSvgIcon.js
import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    transition: theme.transitions.create('stroke', {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

/**
 * Private module
 */
export default function createSvgIcon(path: React.ReactNode, displayName: string) {
  const Component = (props: SvgIconProps, ref: SvgIconProps['ref']) => {
    const { className, ...rest } = props;
    const classes = useStyles();
    return (
      <SvgIcon
        data-mui-test={`${displayName}Icon`}
        ref={ref}
        className={clsx(className, classes.root)}
        {...rest}
      >
        {path}
      </SvgIcon>
    );
  };

  // @ts-ignore
  if (process.env.NODE_ENV !== 'production') {
    // Need to set `displayName` on the inner component for React.memo.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = `${displayName}Icon`;
  }

  // @ts-ignore
  Component.muiName = SvgIcon.muiName;

  return React.memo(React.forwardRef(Component));
}
