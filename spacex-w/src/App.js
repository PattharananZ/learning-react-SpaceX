import logo1 from './image/logoblack.png';
import './App.css';
import { NavLink } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Rocket from './Rocket';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb, Image, Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="App-logo">
            <Image src={logo1} className="img-logo" />
          </div>
          <div className="navbar-menu">
            <NavLink exact to="/" activeClassName="is-active" className="navbar-item">
              Home
            </NavLink>
            <NavLink exact to="/rocket" activeClassName="is-active" className="navbar-item dropdown">
              Rocket
            </NavLink>
            <NavLink exact to="/launches" activeClassName="is-active" className="navbar-item dropdown">
              Launches
            </NavLink>
          </div>
        </header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/rocket">
            <Rocket />
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;
