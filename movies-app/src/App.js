import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Header from './basic/header'
import Main from './basic/main'


function App() {
  return (
    <Router>
      <div className="App">
       <Header/>
       <Main/>
      </div>
    </Router>
  );
}

export default App;
