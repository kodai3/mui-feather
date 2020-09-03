import * as React from "react";
import { createSvgIcon } from "@material-ui/core/utils";

export default createSvgIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </>,
  "Clock"
);
