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
import Launches from './Launches';
import FC1over from './FC1-1';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb, Image, Container, Col, NavDropdown} from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
      <Container fluid>
        <header className="App-header">
        <Col className="navbar-menu"sm={6}>
          <div className="App-logo">
            <Image src={logo1} className="img-logo" />
            </div>
            </Col>
            <Col className="navbar-menu"sm={2}>
            <NavLink exact to="/" activeClassName="is-active" className="navbar-item">
              Home
            </NavLink>
            </Col>
            <Col className="navbar-menu" sm={2}>
            <NavDropdown title="Rocket" id="basic-nav-dropdown" activeClassName="is-active" className="navbar-item">
        <NavDropdown.Item exact to="/rocket">All</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item exact to="/launches">Rocket Detail</NavDropdown.Item>
      </NavDropdown>
            </Col>
            <Col className="navbar-menu" sm={2}>
            <NavLink exact to="/launches" activeClassName="is-active" className="navbar-item dropdown">
              Launches
            </NavLink>
            </Col>
          
          
          
        </header>
        </Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/rocket">
            <Rocket />
          </Route>
          <Route path="/overview-fc1">
            <FC1over />
          </Route>
          <Route path="/launches">
            <Launches />
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;
