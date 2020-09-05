import * as React from 'react';
import { createSvgIcon } from '@material-ui/core/utils';

export default createSvgIcon(
  <>
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </>,
  'Truck',
);
