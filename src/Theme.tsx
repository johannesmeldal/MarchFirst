import { createTheme } from "@mui/material";

// https://mui.com/material-ui/customization/default-theme/
const Theme = createTheme({
  palette: {
    primary: {
      main: "#024f76",
      dark: "#002c4d",
    },
    secondary: {
      main: "#00aeef",
      light: "#b4daed",
    },
    warning: {
      main: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
      disabled: "#00aeef",
    },
    background: {},
  },
  typography: {
    h1: {
      color: "#ffffff",
    },
    h2: {
      color: "#ffffff",
    },
    h3: {
      color: "#ffffff",
    },
    h4: {
      color: "#000000",
    },
    h5: {
      color: "#ffffff",
    },
    body1: {
      color: "#000000",
    },
    body2: {
      color: "#ffffff",
    },
  },
});

export default Theme;
