import logo1 from './image/logoblack.png';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb, Image, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <Image src={logo1} className="img-logo"/>
        </div>
        <div className="menu">
          <Breadcrumb>
            <Breadcrumb.Item active>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Rocket</Breadcrumb.Item>
            <Breadcrumb.Item href="">Launches</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </header>
      <Container>
        
      </Container>
    </div>

  );
}

export default App;
