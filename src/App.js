import logo from './logo.svg';
import './App.css';
import AppLayout from './components/AppLayout';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps }from './store/mapPropsToState';


function App(props) {
  return (
    <div className="App">
        <AppLayout/>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
