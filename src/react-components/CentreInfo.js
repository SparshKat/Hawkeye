import React, { Component } from "react";

// reactstrap components
import {
  Button,
  Row,
  Col
} from "reactstrap";


class CentreInfo extends Component {

  constructor(props){
    super(props);
     this.state = {
       boardYear : "12th",
       centreNumber : "#467",
       classStrength : "40",
       Invigilators : ["Dr. Ramgopal Verma" , "Mrs. Sushriti Mishra" , "Mr. Ramkesh Tiwari"]
     }
  }

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
            CBSE 
            <span> {this.state.boardYear}</span> Board Centre  
            <span> {this.state.centreNumber}</span> <br />
          </h4>
            <h6 className="description">Class Strength - 
            <div>{this.state.classStrength}</div></h6>
        </div>
      </div>
      <br />
      <Row>
        <Col className="ml-auto mr-auto text-center" md="6">
          <div>
            <h6> Invigilators :</h6>
            {this.state.Invigilators.forEach( (person,i) =>{
              if(i === this.state.Invigilators.length-1){
                return(
                  <p> {person} </p>
                );
              } else {
                return(
                  <p>{person} | </p>
                );
              }
              
            })}
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
          <Button className="btn-round" color="success" outline href="/profile-page">
            <i className="fa nc-check-2" /> Click Here!
          </Button>
        </Col>
      </Row>
      </div>
    );
  }
}

export default CentreInfo;