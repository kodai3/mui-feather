import * as React from 'react';
import { createSvgIcon } from '@material-ui/core/utils';

export default createSvgIcon(
  <>
    <circle cx="12" cy="6" r="2" />
    <line x1="5" y1="12" x2="19" y2="12" />
    <circle cx="12" cy="18" r="2" />
  </>,
  'Divide',
);
