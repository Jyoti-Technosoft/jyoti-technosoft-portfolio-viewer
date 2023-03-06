const defaultTheme = {
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
      badge: {
        background: '#dde7c1',
        color:'#2a9461'
      },
      sidebar: {
        background: '#ffffff'
      }
    },
  };


const darkTheme = {
  palette: {
    primary: {
      main: "#262626"
    },
    secondary: {
      main: "#7f7f7f"
    },
    sidebarColor: {
      main: '#F0EEED'
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
      background: '#f2f2f2'
    },
    background: '#d8d8d8',
    sidebar: {
      background: '#ffffff'
    },
    badge: {
      background: '#262626',
      color:'#ffffff'
    },
    sidebar: {
      background: '#f2f2f2',
      selectedBtn: '#ffffff'
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        .Mui-selected {
            background-color: black !important;
          }
        `,
      },
    },
  },
};


export { darkTheme, defaultTheme } ;