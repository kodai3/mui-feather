import * as React from "react";
import { createSvgIcon } from "@material-ui/core/utils";

export default createSvgIcon(
  <>
    <circle cx="5.5" cy="11.5" r="4.5" />
    <circle cx="18.5" cy="11.5" r="4.5" />
    <line x1="5.5" y1="16" x2="18.5" y2="16" />
  </>,
  "Voicemail"
);
