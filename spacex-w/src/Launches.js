import React from 'react'
import './Launches.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import icon1 from './image/filter.png'
import icon2 from './image/search.png'
import test from './image/RocketTest.jpg'
import nopic from './image/nopic.png'
import * as loadingData from "./loading.json"
import { useEffect, useState } from 'react'
import { Container, Form, Row, Col, Button, Card, ListGroup, ListGroupItem, Alert } from 'react-bootstrap'

// loadingscreen
// const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingData.default,
//     rendererSettings: {
//         preserveAspectRatio: "xMidYMid slice"
//     }
// };

const Launches = () => {
    const [launches, setRockets] = useState([])
    // const [loading, setLoading] = useState(false);
    useEffect(
        () => {
            const fetchRockets = async () => {
                const response = await fetch('https://api.spacexdata.com/v3/launches')
                const data = await response.json()
                setRockets(data)
            }
            fetchRockets()
        },
        [],
    )
    const no = "No Detail";
    return (
        <div className="launches">
            <Container>
                <Form className="search">
                    <Form.Row>
                        <Col lg={3} xs={12}>
                            <span className="text-3">Launches</span>
                        </Col>
                        <Col lg={8} xs={10}>
                            <Form.Control placeholder="Search Name Rocket" />
                        </Col>
                        <Col lg={1} xs={2}>
                            <Button className="filter-ico" variant="secondary"><img src={icon1} /></Button>
                        </Col>
                    </Form.Row>
                </Form>
                <div className="lan-card">
                    {launches.map((launche) => (
                        <Card classname="card-detail" style={{ width: '16rem' }}>
                            <Card.Img variant="top" className="image-lan" src={launche.links.mission_patch == null ? nopic : launche.links.mission_patch} />
                            <Card.Body>
                                <Card.Title >{launche.rocket.rocket_name}</Card.Title>
                                <Card.Text className="text-1">
                                    <p>{launche.mission_name}</p>
                                    <span className="detail-lan">{launche.details == null ? no : launche.details}</span>
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    <Alert variant="warning">{launche.launch_year}</Alert>
                                    {launche.launch_success == true ? <Alert variant="success">Success</Alert> : <Alert variant="danger">Failed</Alert>}
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    ))}
                </div>
            </Container>
        </div>
    )
}
export default Launches