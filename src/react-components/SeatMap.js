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
import { isThisTypeNode } from "typescript";

class SeatPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            numberOfPeople : "140",
            listOfPeople1 : [],
            listOfPeople2: []
        }
        for (let i = 0; i <=this.state.numberOfPeople/2; i++){
            this.state.listOfPeople1.push(i+1);
        }

        for (let i = 0; i <= this.state.numberOfPeople/2; i++) {
            this.state.listOfPeople2.push(i + 1);
        }
    }
    render() {

        return (
                <div className="container mt-5 p-5">
                    <div className="row mx-5">
                        <div className="offset-2 col-5 mx-auto">
                            <div className="row no-gutters">
                                {
                                    this.state.listOfPeople1.map((person, i) => {
                                        return (
                                                <div className="col-2">
                                                    <ol>
                                                        <li>
                                                            <div className="default">
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row no-gutters">
                                {
                                    this.state.listOfPeople2.map((person, i) => {
                                        return (
                                            <div className="col-2">
                                                <ol>
                                                    <li>
                                                        <div className="default">
                                                        </div>
                                                    </li>
                                                </ol>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div>

            );
        }
    }
export default SeatPage;
