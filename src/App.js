import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
function App() {
  return (
    <div className="App">
        <AppLayout/>
    </div>
  );
}

export default App;
