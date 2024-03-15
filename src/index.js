import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter for routing
import App from './App'; // Import your top-level component

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Wrap your top-level component with the Router */}
      <App /> {/* Render your top-level component */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
