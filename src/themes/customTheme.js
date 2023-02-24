import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: "#2a9461"
      },
      secondary: {
        main: "#00ff12"
      },
      sidebarColor: {
        main: '#2a9461'
      },
      primaryLight: {
        main: "#112457",
        contrastText: "#125487"
      },
      error: {
        main: '#FF0000',
      },
      shareBtn: {
        main: '#112468',
      },
      visitSiteBtn: {
        main: '#112468',
      },
      info: {
        main: '#FF0000',
      },
      success: {
        main: '#FF0000',
      },
      text: {
        primary: '#112457',
        secondary: '#112468',
        background: '#94C973'
      },
      card: {
        background: '#ffffff'
      },
      background: '#f4f9fa',
      sidebar: {
        background: '#ffffff'
      },
      badge: {
        background: '#dde7c1',
        color:'#2a9461'
      }
    },
  });


export default theme