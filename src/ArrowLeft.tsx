import * as React from 'react';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  <>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </>,
  'ArrowLeft',
);
