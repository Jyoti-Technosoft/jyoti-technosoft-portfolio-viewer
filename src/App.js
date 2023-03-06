import './App.css';
import AppLayout from './components/AppLayout';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps }from './store/mapPropsToState';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import * as theme from './themes/customTheme';
import * as React from "react";
import CssBaseline from '@mui/material/CssBaseline';

function App(props) {

  const [currentTheme, setCurrentTheme] = React.useState(theme.defaultTheme);

  React.useEffect(() => {
    const currentTheme = props.isDarkTheme ? theme.darkTheme : theme.defaultTheme;
    setCurrentTheme(currentTheme);
  },[props.isDarkTheme]);

  return (
    <ThemeProvider theme={createTheme(currentTheme)}>
      <CssBaseline />
      <div className="App">
          <AppLayout/>
      </div>
    </ThemeProvider>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
