import * as React from 'react';
import { createSvgIcon } from '@material-ui/core/utils';

export default createSvgIcon(
  <>
    <polyline points="10 15 15 20 20 15" />
    <path d="M4 4h7a4 4 0 0 1 4 4v12" />
  </>,
  'CornerRightDown',
);
