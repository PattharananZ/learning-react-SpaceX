import React from 'react';
import './RocketDT.css';
import {Link} from 'react-router-dom';
import Test from './image/test2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Image, Carousel, Pagination} from 'react-bootstrap';
const RocketDT = () => {
    return(
        <Container fluid className="ldt">
            <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
  <Row className="RK-DT">
    <Col className="Mission-name" sm={12}>
        <h1 className="TitleName">Rocket Name</h1>
    </Col>
    </Row>

    <Container>
    <Row className="RK-DT">
    <Col className="img-rocket" sm={6}>
    <Image src={Test} className="rocket-pic"></Image>
    </Col>
    <Col className="info-rocket" sm={6}>
    <Row className="img-flex">
    <Carousel>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Overview</h3>
      <p>Height :</p>
      <p>Diameter :</p> 
      <p>Mass : </p>
<p>Payload_weights : </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </Row>
    </Col>
  </Row>
  </Container>

  <Row className="ButtonPN">
  <Col className="Prev" sm={6}>
  <Pagination className="RD">
  <Pagination.Prev />
  </Pagination >
  </Col>
  <Col className="next" sm={6}>
  <Pagination className="RD"> 
  <Pagination.Next />
  </Pagination>
  </Col>
  </Row>
    </Container>
    )
}

export default RocketDT