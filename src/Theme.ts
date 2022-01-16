import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#22C870",
    },
    secondary: {
      main: "#0365F2",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "100%",
          border: "1px solid #E1ECFC",
          boxSizing: "border-box",
          borderRadius: "0px 0px 8px 8px",
          "&:hover": {
            color: "#ffffff",
            backgroundColor: "#0365F2",
            MuiTypographyRoot: {
              color: "#ffffff",
            },
          },
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "0px",
          borderRadius: "0px 0px 8px 8px",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "20px",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        barColorPrimary: {
          backgroundColor: "#E1ECFC",
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
