import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#273A53",
    },
    secondary: {
      main: "#ffffff",
    },
    error: {
      main: red.A400,
      light: "#F17215",
    },
    background: {
      default: "#ffffff",
    },
    orange: {
      main: "#F17215",
    },
    textSecondary: {
      main: "#F17215",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontSize: 50,
      fontWeight: 600,
    },
    h2: {
      fontSize: 24,
      "@media (max-width:600px)": {
        fontSize: 10,
      },
    },
    h3: {
      fontSize: 24,
      "@media (max-width:800px)": {
        fontSize: 20,
      },
    },
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {
      fontSize: 30,
      color: "#F17215",
      fontWeight: 600,
    },
    body2: {},
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
