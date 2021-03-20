
import './App.css';

// Components
import Header from "./components/header";
import Jumbotron from "./components/jumbotron";
import Distribution from './components/distrbution';
import Services from './components/services';
import Verified from './components/verified';
import Footer from './components/footer';

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
            <Jumbotron />
            <Services />
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
