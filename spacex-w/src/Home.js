import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import logo2 from './image/logowhite.png';

const Rocket = () => {
    return (
        <div className="page">
            <div className="content page1">
                <img src={logo2} className="img1" />
                <span className="text-1">SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.</span>
                <Button variant="outline-dark">Learn More</Button>
            </div>
            <div className="content page2">

            </div>
            <div className="content page3">

            </div>
            <div className="content page4">

            </div>
        </div>
    )
}
export default Rocket