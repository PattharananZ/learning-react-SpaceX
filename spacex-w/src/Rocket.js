import React from "react";
import { useHistory } from "react-router-dom";
import "./Rocket.css";
import overview1 from "./image/FC9-0z.png";
import FirstFC9 from "./image/FC9-1z.png";
import SecondFC9 from "./image/FC9-2z.png";
import PayloadFC9 from "./image/FC9-3z.png";
import EngineFC9 from "./image/FC9-4z.png";
import overview2 from "./image/FCHV-0z.png";
import FirstHV from "./image/FCHV-1z.png";
import PayloadFCHV from "./image/FCHV-3z.png";
import overview3 from "./image/starship-0z.png";
import FirstStar from "./image/starship-1z.png";
import SecondStar from "./image/starship-2z.png";
import PayloadStar from "./image/starship-3z.png";
import EngineStar from "./image/starship-04z.png";
import overview0 from "./image/OverFC1.png";
import FirstFC1 from "./image/FirstFC1.png";
import SecondFC1 from "./image/SecFC1.png";
import EngineFC1 from "./image/EngineFC1.png";

import { Container, Col, Row, Image, Button } from "react-bootstrap";
const Rocket = () => {
  let his = useHistory();
  const sendtoDetail = (id) => {
    his.push("/rocket/" + id);
  };
  return (
    <Container fluid className="RocketD">
      <Row>
        <Col className="Falcon9" sm={3}>
          Falcon 1
          <Button
            class="buttonS button-RK"
            variant="outline-light"
            type="button"
            onClick={(e) => {
              sendtoDetail("falcon1");
            }}
          >
            Detail
          </Button>
        </Col>
        <Col className="RC-FC9" sm={9}>
          <div class="RC-FC9-D">
            <Image src={overview0} className="rocket-img" roundedCircle />
            <div class="fontSize">Overview</div>
          </div>
          <div class="RC-FC9-D">
            <Image src={FirstFC1} className="rocket-img" roundedCircle />
            <div class="fontSize">First Stage</div>
          </div>
          <div class="RC-FC9-D">
            <Image src={SecondFC1} className="rocket-img" roundedCircle />
            <div class="fontSize">Second Stage</div>
          </div>
          <div class="RC-FC9-D">
            <Image src={PayloadFCHV} className="rocket-img" roundedCircle />
            <div class="fontSize">Payload</div>
          </div>
          <div class="RC-FC9-D">
            <Image src={EngineFC1} className="rocket-img" roundedCircle />
            <div class="fontSize">Engine</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="Falcon9" sm={3}>
          Falcon 9
          <Button
            class="buttonS button-RK"
            variant="outline-light"
            type="button"
            onClick={(e) => {
              sendtoDetail("falcon9");
            }}
          >
            Detail
          </Button>
        </Col>
        <Col className="RC-FC9" sm={9}>
          <div class="RC-FC9-D">
            <Image src={overview1} className="rocket-img" roundedCircle />
            <div class="fontSize">Overview</div>
          </div>
          <div class="RC-FC9-D">
            <Image src={FirstFC9} className="rocket-img" roundedCircle />
            <div class="fontSize">First Stage</div>
          </div>
          <div class="RC-FC9-D">
            <Image src={SecondFC9} className="rocket-img" roundedCircle />
            <div class="fontSize">Second Stage</div>
          </div>
          <div class="RC-FC9-D">
            <Image src={PayloadFC9} className="rocket-img" roundedCircle />
            <div class="fontSize">Payload</div>
          </div>
          <div class="RC-FC9-D">
            <Image src={EngineFC9} className="rocket-img" roundedCircle />
            <div class="fontSize">Engine</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="Falcon9" sm={3}>
          Falcon Heavy
          <Button
            class="buttonS button-RK"
            variant="outline-light"
            type="button"
            onClick={(e) => {
              sendtoDetail("falconheavy");
            }}
          >
            Detail
          </Button>
        </Col>
        <Col className="RC-FC9" sm={9}>
          <div class="RC-FC9-D">
            <Image src={overview2} className="rocket-img" roundedCircle />
            <div class="fontSize">Overview</div>
          </div>
          <div class="RC-FC9-D">
            <Image src={FirstHV} className="rocket-img" roundedCircle />
            <div class="fontSize">First Stage</div>
          </div>
          <div class="RC-FC9-D">
            <Image src={SecondFC9} className="rocket-img" roundedCircle />
            <div class="fontSize">Second Stage</div>
          </div>
          <div class="RC-FC9-D">
            <Image src={PayloadFCHV} className="rocket-img" roundedCircle />
            <div class="fontSize">Payload</div>
          </div>
          <div class="RC-FC9-D">
            <Image src={EngineFC9} className="rocket-img" roundedCircle />
            <div class="fontSize">Engine</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="Falcon9" sm={3}>
          Starship
          <Button
            class="buttonS button-RK"
            variant="outline-light"
            type="button"
            onClick={(e) => {
              sendtoDetail("starship");
            }}
          >
            Detail
          </Button>
        </Col>
        <Col className="RC-FC9" sm={9}>
          <div class="RC-FC9-D">
            <Image src={overview3} className="rocket-img" roundedCircle />
            <div class="fontSize">Overview</div>
          </div>
          <div class="RC-FC9-D">
            <Image src={FirstStar} className="rocket-img" roundedCircle />
            <div class="fontSize">First Stage</div>
          </div>
          <div class="RC-FC9-D">
            <Image src={SecondStar} className="rocket-img" roundedCircle />
            <div class="fontSize">Second Stage</div>
          </div>
          <div class="RC-FC9-D">
            <Image src={PayloadStar} className="rocket-img" roundedCircle />
            <div class="fontSize">Payload</div>
          </div>
          <div class="RC-FC9-D">
            <Image src={EngineStar} className="rocket-img" roundedCircle />
            <div class="fontSize">Engine</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Rocket;
