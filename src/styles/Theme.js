import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    pink: "hsl(322, 100%, 66%)",
    veryPaleCyan: "hsl(193, 100%, 96%)",
    veryDarkCyan: "hsl(192, 100%, 9%)",
    grayishBlue: "hsl(208, 11%, 55%)"
  },
  fonts: ["Poppins", "Open Sans"],
  body: {
    fontSize: "18px",
  },
  weights: ["400", "600", "700"]
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;