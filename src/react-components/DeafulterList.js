/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
// import Seatmap from "react-seatmap";

// reactstrap components
import {
    Button,
    Label,
    FormGroup,
    Input,
    NavItem,
    NavLink,
    Nav,
    Pagination,
    PaginationItem,
    PaginationLink,
    TabContent,
    TabPane,
    Container,
    Row,
    Col
} from "reactstrap";

import '../assets/scss/defaulter.scss'


function DefaulterList(props){
    const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
    return (
        <>
        <div>
            <Container>
            <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                <Nav role="tablist" tabs>
                    <NavItem>
                    <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        style={{color :"#FC4445" , fontWeight : "bold"}}
                        onClick={() => {
                        toggle("1");
                        }}>
                        Defaulters
                    </NavLink>
                    </NavItem>
                </Nav>
                </div>
            </div>
            <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="All">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                      {
                      props.defaulterList.map((person ,i )=>{
                        return(
                          <>
                          <li>
                            <Row >
                              <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                                <img
                                  alt="..."
                                  className="img-circle img-no-padding img-responsive"
                                  src= {require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                                />
                              </Col>
                              <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                                <h6>
                                  {person.name}<br />
                                  <small>Roll Number - {person.rollNo}</small>
                                  < br />
                                    <small>Row No. - {person.rowNo}</small>
                                  < br />
                                    <small>Seat No. - {person.searNo}</small>
                                </h6>
                              </Col>
                              <Col className="ml-auto mr-auto" lg="3" md="4" xs="4" >
                                
                                <FormGroup check>
                                
                                  
                         
                                  <Label check >
                                  
                                    
                                  </Label>
                                </FormGroup>
                                </Col>
                            </Row>
                          </li>
                          <hr />
                          </>
                        );
                        
                      })
                    }
                  </ul>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
            </Container>
        </div>
            
        </>
    );
}
        
export default DefaulterList;
