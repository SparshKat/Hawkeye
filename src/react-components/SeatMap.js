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
            numberOfPeople : "40",
            listOfPeople : []
        }
        for (let i = 0; i <=this.state.numberOfPeople; i++){
            this.state.listOfPeople.push(i+1);
        }
    }
    render() {
        
            return (

            <div className ="plane">
                <ol className="cabin fuselage">
                    <li className="row row--1">
                        <ol className="seats" type="A">
                            {
                                this.state.listOfPeople.map((person , i) => {
                                    // console.log();
                                    return(
                                    // <p>{i}</p>
                                        <li >
                                            <div className="default">
                                                {/* <p>i</p> */}
                                            </div>   
                                        </li>
                                    );
                                })
                            }
                        </ol>
                    </li>
                </ol>
            </div>
            );
        }
    }
export default SeatPage;
