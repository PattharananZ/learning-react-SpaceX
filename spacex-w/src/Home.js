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
import image1 from './image/image1.png';
import YouTube from 'react-youtube';

const Rocket = () => {
    // const opts = {
    //     height: '2',
    //     width: '35vw',
    //     playerVars: {
    //         autoplay: 1,
    //     },
    // };
    return (
        <div className="page">
            <div className="content page1">
                <img src={logo2} className="img1" />
                <span className="text-1">SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.</span>
                <Button variant="outline-dark up">Learn More</Button>
                <div class="box">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="content page2" id="info">
                <Row className="row-2">
                    <Col md="6" sm="12" className="col-6 social-content">
                        <h3>Space Exploration Technologies Corp. </h3>
                        <span className="text-1">aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk</span>
                        <div className="social">
                            <img src={so1} />
                            <img src={so2} />
                            <img src={so3} />
                            <img src={so4} />
                            <img src={so5} />
                        </div>
                    </Col>
                    <Col md="6" sm="12" className="col-6">
                    <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src="https://www.youtube.com/embed/Q_s_7iTydYU?enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=3" id="widget2"></iframe>
                    </Col>
                </Row>
            </div>
            <div className="content page3">
                <div className="page-content">
                <Col md="6" sm="12" className="col-6">
                        <img src={image1} className="img3" />
                    </Col>
                    <Col md="6" sm="12" className="col-6">
                        <h2 className="topic">Rocket</h2>
                        <span className="text-2">THE WORLD’S MOST POWERFUL ROCKET</span><br></br>
                        <Button variant="outline-dark" to="info">Learn More</Button>
                        </Col>
                </div>
            </div>
            <div className="bg2">
                <div className="content page4">
                    <h2 className="topic2">Launches</h2>
                    <span className="text-2">You can watch a replay of this mission above.</span>
                    <Button variant="outline-dark up">Learn More</Button>

                </div>
                <div className="footer">
                    <span>Copyright  © Space w/ NotePam</span>
                </div>
            </div>
        </div>
    )
}
export default Rocket