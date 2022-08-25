import { createTheme, Theme } from "@mui/material";
import { blueGrey, teal } from "@mui/material/colors";

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: teal["A100"],
    },
    text: {
      primary: blueGrey[900],
    },
  },
});
