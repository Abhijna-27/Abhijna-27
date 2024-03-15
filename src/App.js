import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import Products from './components/Products';


import './styles/styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Dashboard />
        <Switch>
          
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
