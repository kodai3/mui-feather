import * as React from 'react';
import { createSvgIcon } from '@material-ui/core/utils';

export default createSvgIcon(
  <>
    <polyline points="10 9 15 4 20 9" />
    <path d="M4 20h7a4 4 0 0 0 4-4V4" />
  </>,
  'CornerRightUp',
);
