import React from 'react';
import {Link} from 'react-router-dom';
import './RKdetail.css';
import rocketPic from './image/RocketTest.jpg';


import {Container, Col, Row, Image, Button, Card} from 'react-bootstrap';
const FC1over = () => {
    return(
        <Container fluid>
  <Row>
    Back
    <Col>
    <Card>
  <Card.Body>
    <Row>
    <Col className="Imgspace" sm={6}>
    <Image src={rocketPic}/>
    </Col>
    <Col className="Infospace" sm={6}>
    Kuay I here I sus 
    </Col>
    </Row>
  </Card.Body>
</Card>
    </Col>
    Next
    </Row>
  </Container>
      )
    }
    export default FC1over