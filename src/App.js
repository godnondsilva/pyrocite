import React from 'react';
import './App.css';

// Components
import Header from "./components/header";
import Footer from './components/footer';

// Containers
import Home from './containers/home';
import Wallet from './containers/wallet';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path="/wallet">
            <Header />
            <Wallet />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
