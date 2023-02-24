import logo from './logo.svg';
import './App.css';
import AppLayout from './components/AppLayout';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps }from './store/mapPropsToState';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/customTheme';

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <AppLayout/>
      </div>
    </ThemeProvider>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
