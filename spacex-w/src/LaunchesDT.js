import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import './LaunchesDT.css';
import Test from './image/testPNG.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import nopic from './image/nopic.png'
import { Container, Col, Row, Image, Button, Pagination, Alert } from 'react-bootstrap';
const LaunchesDT = () => {
  
  const { id } = useParams();
  let his = useHistory()
  const [launches, setRockets] = useState([])
  const change = (id) => {
    his.push('/launches/' + id)
    window.location.reload(false);
  }
  useEffect(
    () => {
      const fetchRockets = async () => {
        const response = await fetch('https://api.spacexdata.com/v3/launches/' + id)
        const data = await response.json()
        setRockets(data)
      }
      fetchRockets()
    },
    [],
  )
  
  if (launches.flight_number == null) {
    return <div></div>;
  }
  return (
    <Container fluid className="ldt">
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <Row className="LA-DT">
        <Col className="Mission-name" sm={12}>
          <h1 className="Mission">{launches.mission_name}</h1>
          <h4 className="Flight">Flight number : {launches.flight_number} | year : {launches.launch_year} </h4>
        </Col>
      </Row>

      <Container>
        <Row className="LA-DT">
          <Col className="info-launch" sm={6}>
            <h2 className="titleLD">Details</h2>
            {launches.rocket.rocket_name} <br></br>
    Type : {launches.rocket.rocket_type} <br></br>
    Year : {launches.launch_year} <br></br>
    Serial : {launches.rocket.first_stage.cores[0].core_serial} <br></br>
    Payload : {launches.rocket.second_stage.payloads[0].payload_id} <br></br>
    Payload-type : {launches.rocket.second_stage.payloads[0].payload_type} <br></br>
    Success : {launches.launch_success == true ? <Alert variant="success">Success</Alert> : <Alert variant="danger">Failed</Alert>} <br></br>
    Detail : <span className="detail-lan">{launches.details == null ? "No Detail" : launches.details}</span>
          </Col>
          <Col className="img-launch" sm={6}>
            <Row className="img-flex">
              <Image src={launches.links.mission_patch == null ? nopic : launches.links.mission_patch} className="rocket-pic"></Image>
              <span className="btn-s"><a href="/rocket-detail" className="linkD">Rocket Detail </a></span>
            </Row>
          </Col>
        </Row>
      </Container>
      <Row className="ButtonPN">
        <Col className="Prev" sm={6} onClick={(e)=>{change(Number(id)-1)}}>
          <Pagination>
            <Pagination.Prev />
          </Pagination>
        </Col>
<<<<<<< Updated upstream
        <Col className="next" sm={6} onClick={(e)=>{change(Number(id)+1)}}>
=======
        <Col className="Prev2" sm={6}>
>>>>>>> Stashed changes
          <Pagination>
            <Pagination.Next />
          </Pagination>
        </Col>
      </Row>
    </Container>
  )
}

export default LaunchesDT