import React from 'react';
import './RocketDT.css';
import {Link} from 'react-router-dom';
import Test from './image/test2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Image, Button, Pagination} from 'react-bootstrap';
const RocketDT = () => {
    return(
        <Container fluid className="ldt">
            <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
  <Row className="RK-DT">
    <Col className="Mission-name" sm={12}>
        <h1 className="TitleName">Title Name</h1>
    </Col>
    </Row>

    <Container>
    <Row className="RK-DT">
    <Col className="img-rocket" sm={6}>
    <Image src={Test} className="rocket-pic"></Image>
    </Col>
    <Col className="info-rocket" sm={6}>
    <Row className="img-flex">
    <h2 className="titleRKD">Details</h2>
    rocket_name <br></br>
    Type : rocket_type <br></br>
    Year : launch_year <br></br>
    Serial : core_serial(first_stage) <br></br>
    Payload : payloads_id(second) <br></br>
    Payload-type : payload_type <br></br>
    Success : launch_success <br></br>
    Detail : details 
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

export default RocketDT