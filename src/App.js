
import './App.css';

// Components
import Header from "./components/header";

import Distribution from './components/distrbution';
import Verified from './components/verified';
import Footer from './components/footer';

import HomeParticles from './containers/home-particles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <HomeParticles />
            <Distribution />
            <Verified />
            <Footer />
          </Route>
          <Route path="/contact">
            <Header />
            {/* <ContactPage /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
