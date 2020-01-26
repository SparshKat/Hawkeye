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
            numberOfPeople : "142",
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

                <div className="container">
                    <div className="row mx-md-5">
                        <div className="offset-2 offset-md-1 col-4">
                            <div className="row no-gutters">
                                {
                                    this.state.listOfPeople1.map((person, i) => {
                                        return (
                                                <div className="col-3 col-md-2">
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
                        {/* <div className="col-2">

                        </div> */}
                        <div className="offset-1 offset-md-2 col-4">
                            <div className="row no-gutters">
                                {
                                    this.state.listOfPeople2.map((person, i) => {
                                        return (
                                            <div className="col-3 col-md-2">
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
                <div className="row">
                    {/* <div className="ml-4 ml-md-2 col-1 col-md-2">

                    </div> */}
                    <div className="mt-5 col-md-6 col-lg-7 mx-lg-auto">
                        <div className="d-none d-md-block">
                            <img src="//assetscdn1.paytm.com/webmovies/5ff3a50c.png" />
                        </div>
                    </div>
                    {/* <div className="col-0 col-lg-1"></div> */}
                </div>
                </div>

            );
        }
    }
export default SeatPage;
