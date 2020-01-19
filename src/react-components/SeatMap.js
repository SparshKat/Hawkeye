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
    TabContent,
    TabPane,
    Container,
    Row,
    Col
} from "reactstrap";

import DefaulterList from "./DeafulterList";

class SeatPage extends Component {
    render() {

        return (
            <>
            <div>
                <Container>
                    <div className="nav-tabs-navigation">
                        <div className="nav-tabs-wrapper">
                            <Row>
                                <Col className="mx-auto" lg="2" md="4" xs="4">
                                    <Button>
                                        
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <DefaulterList />
                </Container>
            </div>
                
            </>
        );
    }
}
export default SeatPage;
