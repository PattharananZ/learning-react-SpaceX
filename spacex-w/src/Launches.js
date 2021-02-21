import React from 'react'
import './Launches.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import icon1 from './image/filter.png'
import icon2 from './image/search.png'
import test from './image/RocketTest.jpg'
import nopic from './image/nopic.png'
import * as loadingData from "./loading.json"
import { useEffect, useState, useMemo } from 'react'
import { Container, Form, Row, Col, Button, Card, ListGroup, ListGroupItem, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import Select from 'react-select'


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
    const [searchTern, setSearchTern] = useState('')
    const [searchYear, setSearchYear] = useState('')
    const [Issuc, setSuc] = useState('')
    let his = useHistory()
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
    const sendtoDetail = (id) =>{
        his.push('/Launches/'+id)
    }
    const options = [
        { label: 'All', value: "no" },
        { label: 'Success', value: true },
        { label: 'Failed', value: false }
    ]
    const no = "No Detail";
    const handleBoolChange = (event) => {
        setSuc(event);
    };

    return (
        <div className="launches">
            <Container>
                <Form className="search">
                    <Form.Row>
                        <Col lg={2} xs={12}>
                            <span className="text-3">Launches</span>
                        </Col>
                        <Col lg={4} xs={5}>
                            <Form.Control placeholder="Rocket Name" onChange={event => { setSearchTern(event.target.value) }} />
                        </Col>
                        <Col lg={4} xs={5}>
                            <Form.Control placeholder="Year" onChange={event => { setSearchYear(event.target.value) }} />
                        </Col>
                        <Col lg={2} xs={2}>
                            <Select
                                defaultValue={options[0]}
                                options={options}
                                value={Issuc}
                                onChange={handleBoolChange}
                            />
                        </Col>
                    </Form.Row>
                </Form>
                <div className="lan-card">
                    {launches.filter((launche) => {
                        if(Issuc.value == "no" || Issuc.value == undefined){
                            if((launche.rocket.rocket_name.toLowerCase().includes(searchTern.toLowerCase())) && launche.launch_year.includes(searchYear)){
                                return launche
                            }
                        }else if (Issuc.value == true || Issuc.value == false){
                            console.log((launche.rocket.rocket_name.toLowerCase().includes(searchTern.toLowerCase())) && launche.launch_year.includes(searchYear) && Issuc.value == launche.launch_success)
                            if((launche.rocket.rocket_name.toLowerCase().includes(searchTern.toLowerCase())) && launche.launch_year.includes(searchYear) && Issuc.value == launche.launch_success){
                                return launche
                            }
                        }
                    }
                    ).map((launche, key) => (
                        < Card classname="card-detail" style={{ width: '16rem' }} key={key} onClick={(e)=>{sendtoDetail(launche.flight_number)}}>
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
        </div >
    )
}
export default Launches