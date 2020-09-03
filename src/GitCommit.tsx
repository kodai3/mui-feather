import * as React from "react";
import { createSvgIcon } from "@material-ui/core/utils";

export default createSvgIcon(
  <>
    <circle cx="12" cy="12" r="4" />
    <line x1="1.05" y1="12" x2="7" y2="12" />
    <line x1="17.01" y1="12" x2="22.96" y2="12" />
  </>,
  "GitCommit"
);
