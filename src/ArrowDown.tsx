import * as React from "react";
import { createSvgIcon } from "@material-ui/core/utils";

export default createSvgIcon(
  <>
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </>,
  "ArrowDown"
);
