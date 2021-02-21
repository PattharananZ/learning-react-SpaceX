import React from 'react';
import './RocketDT.css';
import {Link} from 'react-router-dom';
import Test from './image/test2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Image, Carousel, Pagination} from 'react-bootstrap';
const RocketDT2 = () => {{
    return (

      <div className="container-fluid">
        <div className="row-fluid">
          <div className="span12">
            <div className="page-header">
              <h3>Rocket Name</h3>
              <p>Company</p>
            </div>
            <div className="carousel slide" id="myCarousel">
              <div className="carousel-inner">
                <div className="item active">
                  <div className="bannerImage">
                    <a href="#"><img src="http://placehold.it/960x405" alt="" /></a>
                  </div>
                  <div className="caption row-fluid">
                    <div className="span4">
                      <h3>Overview</h3>
                    </div>
                    <div className="span8">
                      <p>Height :</p>
                      <p>Diameter : </p>
                      <p>Mass : </p>
                      <p>Payload_weights : </p>
                    </div>
                  </div>
                </div>{/* /Slide1 */}
                <div className="item">
                  <div className="bannerImage">
                    <a href="#"><img src="http://placehold.it/960x405" alt="" /></a>
                  </div>
                  <div className="caption row-fluid">
                    <div className="span4">
                      <h3>First Stage</h3>
                    </div>
                    <div className="span8">
                      <p>THRUST AT SEA LEVEL : </p>
                      <p>THRUST AT VACUUM : </p>
                    </div>
                  </div>
                </div>{/* /Slide2 */}
                <div className="item">
                  <div className="bannerImage">
                    <a href="#"><img src="http://placehold.it/960x405" alt="" /></a>
                  </div>
                  <div className="caption row-fluid">
                    <div className="span4">
                      <h3>Second Stage</h3>
                    </div>
                    <div className="span8">
                      <p>Number of Engine : </p>
                      <p>BURN TIME : </p>
                      <p>Thrust : </p>
                    </div>
                  </div>
                </div>{/* /Slide2 */}
                <div className="item">
                  <div className="bannerImage">
                    <a href="#"><img src="http://placehold.it/960x405" alt="" /></a>
                  </div>
                  <div className="caption row-fluid">
                    <div className="span4">
                      <h3>Payloads</h3>
                    </div>
                    <div className="span8">
                      <p>Height :</p>
                      <p>Diameter : </p>
                    </div>
                  </div>
                </div>{/* /Slide2 */}
                <div className="item">
                  <div className="bannerImage">
                    <a href="#"><img src="http://placehold.it/960x405" alt="" /></a>
                  </div>
                  <div className="caption row-fluid">
                    <div className="span4">
                      <h3>Engines</h3>
                    </div>
                    <div className="span8">
                      <p>Propellant : </p>
                      <p>THRUST AT SEA LEVEL : </p>
                      <p>THRUST AT VACUUM : </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="control-box">
                <a data-slide="prev" href="#myCarousel" className="carousel-control left">‹</a>
                <a data-slide="next" href="#myCarousel" className="carousel-control right">›</a>
              </div>{/* /.control-box */}
            </div>{/* /#myCarousel */}
          </div>{/* /.span12 */}
        </div>{/* /.row */}
      </div>{/* /.container */}
    );
  }
});

export default RocketDT2