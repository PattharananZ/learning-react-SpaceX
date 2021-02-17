import logo1 from './image/logoblack.png';
import './App.css';
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
          <Image src={logo1} className="img-logo"/>
        </div>
        <div className="menu">
          <Breadcrumb>
            <Breadcrumb.Item active>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/rocket">Rocket</Breadcrumb.Item>
            <Breadcrumb.Item href="">Launches</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </header>
      <Container>
        
      </Container>
    
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
