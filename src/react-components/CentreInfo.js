import React, { Component } from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";


class CentreInfo extends Component {

  render() {
    return (
      <div>
        <div className="owner">
        <div className="avatar">
          <img
            alt="..."
            className="img-thumbnail img-responsive"
            src={require("assets/img/animated-magnifying-analysis.png")}
          />
        </div>
        <div className="name">
          <h4 className="title">
            CBSE 12th Board Centre #467 <br />
          </h4>
          <h6 className="description">Class Strength - <div>40</div></h6>
        </div>
      </div>
      <br />
      <Row>
        <Col className="ml-auto mr-auto text-center" md="6">
          <div>
            <h6> Invigilators :</h6>
            <p>Dr. Ramgopal Verma | Mrs. Sushriti Mishra | Mr. Ramkesh Tiwari</p>
          </div>
          {/* <div className="typography-line">
              <h6>
                <span className="note">Header 6</span>
                Thinking in textures
              </h6>
            </div> */}
          {/* <p>
                An artist of considerable range, Jane Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.
              </p> */}
          <br />
          <Button className="btn-round" color="default" outline>
            <i className="fa fa-cog" /> Settings
          </Button>
        </Col>
      </Row>
      </div>
    );
  }
}


export default CentreInfo;