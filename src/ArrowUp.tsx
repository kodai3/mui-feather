import * as React from 'react';
import { createSvgIcon } from '@material-ui/core/utils';

export default createSvgIcon(
  <>
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </>,
  'ArrowUp',
);
