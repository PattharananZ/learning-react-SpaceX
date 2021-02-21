import React from 'react';
import './LaunchesDT.css';
import {Link} from 'react-router-dom';
import Test from './image/testPNG.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Image, Button, Pagination} from 'react-bootstrap';
const LaunchesDT = () => {
    return(
        <Container fluid className="ldt">
            <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
  <Row className="LA-DT">
    <Col className="Mission-name" sm={12}>
        <h1 className="Mission">Mission name</h1>
        <h4 className="Flight">Flight number :1 | year : 2000</h4>
    </Col>
    </Row>

    <Container>
    <Row className="LA-DT">
    <Col className="info-launch" sm={6}>
    <h2 className="titleLD">Details</h2>
    rocket_name <br></br>
    Type : rocket_type <br></br>
    Year : launch_year <br></br>
    Serial : core_serial(first_stage) <br></br>
    Payload : payloads_id(second) <br></br>
    Payload-type : payload_type <br></br>
    Success : launch_success <br></br>
    Detail : details 
    </Col>
    <Col className="img-launch" sm={6}>
    <Row className="img-flex">
    <Image src={Test} className="rocket-pic"></Image>
	<span class="btn-s"><a href="/rocket-detail" className="linkD">Rocket Detail </a></span>

    </Row>
    </Col>
  </Row>
  </Container>
  <Row className="ButtonPN">
  <Col className="Prev" sm={6}>
  <Pagination>
  <Pagination.Prev />
  </Pagination>
  </Col>
  <Col className="next" sm={6}>
  <Pagination>
  <Pagination.Next />
  </Pagination>
  </Col>
  </Row>
    </Container>
    )
}

export default LaunchesDT