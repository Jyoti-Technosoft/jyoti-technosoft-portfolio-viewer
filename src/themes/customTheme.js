import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: "#2a9461"
      },
      secondary: {
        main: "#00ff12"
      },
      primaryLight: {
        main: "#112457",
        contrastText: "#125487"
      }
    },
  });


export default theme