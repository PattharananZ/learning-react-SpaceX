import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory, NavLink } from 'react-router-dom';
import './RocketDT.css';
import Test from './image/test2.jpg';
import falcon1 from "./image/OverFC1.png";
import falcon9 from "./image/FC9-0z.png";
import falconheavy from "./image/FCHV-0z.png";
import starship from "./image/starship-0z.png";
import mainpic from "./pic"
import overview1 from './image/FC9-0z.png';
import FirstFC9 from './image/FC9-1z.png';
import SecondFC9 from './image/FC9-2z.png';
import PayloadFC9 from './image/FC9-3z.png';
import EngineFC9 from './image/FC9-4z.png';
import overview2 from './image/FCHV-0z.png';
import FirstHV from './image/FCHV-1z.png';
import PayloadFCHV from './image/FCHV-3z.png';
import overview3 from './image/starship-0z.png';
import FirstStar from './image/starship-1z.png';
import SecondStar from './image/starship-2z.png';
import PayloadStar from './image/starship-3z.png';
import EngineStar from './image/starship-04z.png';
import overview0 from './image/OverFC1.png';
import FirstFC1 from './image/FirstFC1.png';
import SecondFC1 from './image/SecFC1.png';
import EngineFC1 from './image/EngineFC1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image, Carousel, Pagination, mdbreact } from 'react-bootstrap';


const RocketDT = () => {
  const [rockets, setRockets] = useState([])
  const { id } = useParams();
  const image_bg = [[falcon1, falcon9, falconheavy, starship]]
  let his = useHistory()

  useEffect(
    () => {
      const fetchRockets = async () => {
        const response = await fetch('https://api.spacexdata.com/v3/rockets/' + id)
        const data = await response.json()
        setRockets(data)
      }
      fetchRockets()
    },
    [],
  )
  const change = (id) => {
    console.log(id)
    his.push('/rocket/' + id)
    window.location.reload(false);
  }
  if (rockets.rocket_id == null) {
    return <div></div>;
  }
  return (
    <Container fluid className="RKDTs">

      <div class='wrap'>

        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
        <div class='star'></div>
      </div>

      <Row className="LA-DT">
        <Col className="Mission-name" sm={12}>
          <h1 className="Mission">{rockets.rocket_name}</h1>
          <h4 className="Flight">Company : {rockets.company} | First flight : {rockets.first_flight}</h4>
        </Col>
      </Row>

      <Row className="PNG">
        <Col className="png" sm={6}>
          <Image src={image_bg[0][rockets.id-1]} className="rocket-pic" />
        </Col>
        <Col className="info-rocketz" sm={6}>
          <Carousel>
            <Carousel.Item interval={12000}>
              <img
                className="d-block w-100"
                src={Test}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Overview</h3>
                <p>Height : {rockets.height.meters} m</p>
                <p>Diameter : {rockets.diameter.meters} m</p>
                <p>Mass : {rockets.mass.kg} kg</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={15000}>
              <img
                className="d-block w-100"
                src={Test}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>First Stage</h3>
                <p>NUMBER OF ENGINES : {rockets.first_stage.engines}</p>
                <p>THRUST AT SEA LEVEL : {rockets.first_stage.thrust_sea_level.kN} kN</p>
                <p>THRUST AT VACUUM : {rockets.first_stage.thrust_vacuum.kN} kN</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={15000}>
              <img
                className="d-block w-100"
                src={Test}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Second Stage</h3>
                <p>Number of Engine : {rockets.second_stage.engines} vacuum</p>
                <p>Burn Time : {rockets.second_stage.burn_time_sec} sec</p>
                <p>Thrust : {rockets.second_stage.thrust.kN} kN</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={15000}>
              <img
                className="d-block w-100"
                src={Test}
                alt="Four slide"
              />
              <Carousel.Caption>
                <h3>Payloads</h3>
                <p>Height : {rockets.second_stage.payloads.composite_fairing.height.meters} m</p>
                <p>Diameter : {rockets.second_stage.payloads.composite_fairing.diameter.meters} m</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={15000}>
              <img
                className="d-block w-100"
                src={Test}
                alt="Four slide"
              />
              <Carousel.Caption>
                <h3>Engines</h3>
                <p>Propellant : {rockets.engines.propellant_1}, {rockets.engines.propellant_2}</p>
                <p>THRUST AT SEA LEVEL : {rockets.engines.thrust_sea_level.kN} kN</p>
                <p>THRUST AT VACUUM : {rockets.engines.thrust_vacuum.kN} kN</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="ButtonPN">
        {
          rockets.rocket_id != "falcon1" ?
            <Col className="Prev" sm={6} onClick={(e) => {
              if (rockets.rocket_id == "falcon9") {
                return change("falcon1")
              } else if (rockets.rocket_id == "falconheavy") {
                return change("falcon9")
              } else if (rockets.rocket_id == "starship") {
                return change("falconheavy")
              }
            }}>
              <Pagination>
                <Pagination.Prev />
              </Pagination>
            </Col>
            : <Col></Col>
        }
        {
          rockets.rocket_id != "starship" ?
            <Col className="next" sm={6} onClick={(e) => { 
              if (rockets.rocket_id == "falcon1") {
                return change("falcon9")
              } else if (rockets.rocket_id == "falcon9") {
                return change("falconheavy")
              } else if (rockets.rocket_id == "falconheavy") {
                return change("starship")
              }
             }}>
              <Pagination>
                <Pagination.Next />
              </Pagination>
            </Col>
            : <Col></Col>
        }
      </Row>
    </Container>

  );
}

export default RocketDT;