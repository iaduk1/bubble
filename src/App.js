import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home.js';
import Page2 from './Pages/Page2.js';
import Page3 from './Pages/Page3.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
      </Router>
    </div>
  );
}

export default App;
