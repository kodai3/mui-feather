import * as React from 'react';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </>,
  'ArrowUpRight',
);
