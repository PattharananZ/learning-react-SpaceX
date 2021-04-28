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
import LaunchesDT from './LaunchesDT';
import RocketDT from './RocketDT';
import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Container, Col} from 'react-bootstrap';
function App() {
  const [ham, setHam] = useState('hamburger')
  const [menu, setMenu] = useState('navbar-menu main-menu')
  const change = () => {
    console.log("test")
    if (ham === "hamburger") {
      setHam("hamburger click")
      setMenu("navbar-menu main-menu click")
    }
    else{
      setHam("hamburger")
      setMenu("navbar-menu main-menu")
    }
  }
  return (
    <Router>
      <div className="App">
        <Container fluid>
          <header className="App-header">
            <Col className="navbar-menu" lg={6} sm={6} xs={12}>
              <div className="logo-ham">
                <Link to="/">
                  <div className="App-logo">
                    <Image src={logo1} className="img-logo" />
                  </div>
                </Link>
                <div className={ham} onClick={change}>
                  ☰ Menu
                </div>
              </div>
            </Col>
            <Col className={menu} lg={2} sm={2} xs={12}>
              <NavLink exact to="/" activeClassName="is-active" className="navbar-item">
                Home
            </NavLink>
            </Col>
            <Col className={menu} lg={2} sm={2} xs={12}>
              <NavLink exact to="/rocket" activeClassName="is-active" className="navbar-item">
                Rocket
            </NavLink>
              {/* <NavDropdown title="Rocket" activeClassName="is-active" className="navbar-item" href="/rocket">
        <NavDropdown.Item href="/rocket"activeClassName="is-active" className="navbar-item">All</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/launches" activeClassName="is-active" className="navbar-item">Rocket Detail</NavDropdown.Item>
      </NavDropdown> */}
            </Col>
            <Col className={menu} lg={2} sm={2} xs={12}>
              <NavLink exact to="/launches" activeClassName="is-active" className="navbar-item">
                Launches
            </NavLink>
            </Col>



          </header>
        </Container>
        <Switch>
          <Route path="/launches/:id">
            <LaunchesDT />
          </Route>
          <Route path="/rocket/:id">
            <RocketDT />
          </Route>
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
