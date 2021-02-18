import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col } from 'react-bootstrap';
import logo2 from './image/logowhite.png';
import so1 from './image/so1.png';
import so2 from './image/so2.png';
import so3 from './image/so3.png';
import so4 from './image/so4.png';
import so5 from './image/so5.png';
import YouTube from 'react-youtube';

const Rocket = () => {
    const opts = {
        height: '330',
        width: '610',
        playerVars: {
            autoplay: 1,
        },
    };
    return (
        <div Name="page">
            <div className="content page1">
                <img src={logo2} className="img1" />
                <span className="text-1">SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.</span>
                <Button variant="outline-dark" to="info">Learn More</Button>
                <div class="box">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="content page2" id="info">
                <Row className="row-2">
                    <Col md="6" sm="12" className="col-2 social-content">
                        <h3>Space Exploration Technologies Corp. </h3>
                        <span className="text-1">aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk</span>
                        <div className="social">
                            <img src={so1}/>
                            <img src={so2}/>
                            <img src={so3}/>
                            <img src={so4}/>
                            <img src={so5}/>
                        </div>
                    </Col>
                    <Col md="6" sm="12" className="col-2">
                        <YouTube videoId="Q_s_7iTydYU" opts={opts} />
                    </Col>
                </Row>
            </div>

            <div className="content page3">
                

            </div>
            <div className="content page4">

            </div>
        </div>
    )
}
export default Rocket