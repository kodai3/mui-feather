import * as React from 'react';
import { createSvgIcon } from '@material-ui/core/utils';

export default createSvgIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="10" y1="15" x2="10" y2="9" />
    <line x1="14" y1="15" x2="14" y2="9" />
  </>,
  'PauseCircle',
);
