import { createTheme } from "@mui/material";

let theme = createTheme({
  palette: {
    // primary: {
    //   light: "#757ce8",
    //   main: "#3f50b5",
    //   dark: "#002884",
    //   contrastText: "#fff",
    // },
    // secondary: {
    //   light: "#757ce8",
    //   main: "#3f50b5",
    //   dark: "#002884",
    //   contrastText: "#fff",
    // },
    background: {
      default: "#1c1f1d",
    },
  },
});
theme = {
  ...theme,
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
};

export default theme;
