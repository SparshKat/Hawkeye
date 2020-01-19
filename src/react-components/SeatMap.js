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
    // Label,
    // FormGroup,
    // Input,
    // NavItem,
    // NavLink,
    // Nav,
    // TabContent,
    // TabPane,
    Container,
    Row,
    Col
} from "reactstrap";

import DefaulterList from "./DeafulterList";
import '../assets/scss/seatmap.scss'

class SeatPage extends Component {
    render() {

        return (

                    <div class="plane">
                        <ol class="cabin fuselage">
                            <li class="row row--1">
                                <ol class="seats" type="A">
                                    <li class="seat">
                                        <input type="checkbox" id="1A" />
                                        <label for="1A">1A</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="1B" />
                                        <label for="1B">1B</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="1C" />
                                        <label for="1C">1C</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="1D" />
                                        <label for="1D">1D</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="1E" />
                                        <label for="1E">1E</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="1F" />
                                        <label for="1F">1F</label>
                                    </li>
                                </ol>
                            </li>
                            <li class="row row--2">
                                <ol class="seats" type="A">
                                    <li class="seat">
                                        <input type="checkbox" id="2A" />
                                        <label for="2A">2A</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="2B" />
                                        <label for="2B">2B</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="2C" />
                                        <label for="2C">2C</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="2D" />
                                        <label for="2D">2D</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="2E" />
                                        <label for="2E">2E</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="2F" />
                                        <label for="2F">2F</label>
                                    </li>
                                </ol>
                            </li>
                            <li class="row row--3">
                                <ol class="seats" type="A">
                                    <li class="seat">
                                        <input type="checkbox" id="3A" />
                                        <label for="3A">3A</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="3B" />
                                        <label for="3B">3B</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="3C" />
                                        <label for="3C">3C</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="3D" />
                                        <label for="3D">3D</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="3E" />
                                        <label for="3E">3E</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="3F" />
                                        <label for="3F">3F</label>
                                    </li>
                                </ol>
                            </li>
                            <li class="row row--4">
                                <ol class="seats" type="A">
                                    <li class="seat">
                                        <input type="checkbox" id="4A" />
                                        <label for="4A">4A</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="4B" />
                                        <label for="4B">4B</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="4C" />
                                        <label for="4C">4C</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="4D" />
                                        <label for="4D">4D</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="4E" />
                                        <label for="4E">4E</label>
                                    </li>
                                    <li class="seat">
                                        <input type="checkbox" id="4F" />
                                        <label for="4F">4F</label>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                            
                                {/* <Container>
                    <div >
                        <div className="nav-tabs-wrapper" style={{display:" flex" ,flexDirection: "row"}}>
                            <Row lg="4" md="4">
                                <Col className="mx-auto" lg="2" md="4" xs="4">
                                    <ul className="list-unstyled follows">
                                        <li>
                                        <Button color="success">
                                            1A
                                        </Button>
                                        </li>
                                        <li>
                                        <Button color="success">
                                            2A
                                        </Button>
                                        </li>
                                        
                                        <Button color="success">
                                            3A
                                        </Button>
                                    </ ul>
                                </Col>
                            </Row>
                            <Row lg="4" md="4">
                                <Col className="mx-auto" lg="2" md="4" xs="4">
                                    <ul className="list-unstyled follows">
                                        <li>
                                        <Button color="success">
                                            1A
                                        </Button>
                                        </li>
                                        <li>
                                        <Button color="success">
                                            2A
                                        </Button>
                                        </li>
                                        
                                        <Button color="success">
                                            3A
                                        </Button>
                                    </ ul>
                                </Col>
                            </Row>
                            <Row lg="4" md="4">
                                <Col className="mx-auto" lg="2" md="4" xs="4">
                                    <ul className="list-unstyled follows">
                                        <li>
                                        <Button color="success">
                                            1A
                                        </Button>
                                        </li>
                                        <li>
                                        <Button color="success">
                                            2A
                                        </Button>
                                        </li>
                                        
                                        <Button color="success">
                                            3A
                                        </Button>
                                    </ ul>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <DefaulterList />
                </Container> */}
            </div>
                
                        );
                    }
                }
export default SeatPage;
