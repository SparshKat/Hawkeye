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
import React ,{Component} from "react";
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

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import CentreInfo from "react-components/CentreInfo";
import SeatMap from "react-components/SeatMap";
import DefaulterList from "react-components/DeafulterList"

class SeatPage extends Component {
    constructor(props){
      super(props);
      this.state = {
          defaulterList : [{
            name : "Aahad Khan",
            img : "../assets/img/faces/ayo-ogunseinde-2.jpg" ,
            rollNo : "E242763716",
            rowNo : "5",
            seatNo : "2"
          } , {
            name : "Lavanisha Sharma",
            img : "../assets/img/faces/ayo-ogunseinde-2.jpg" ,
            rollNo : "E242YU3Z",
            rowNo : "8",
            seatNo : "6"
          }]
      }
      
    }
  render(){
    return (
      <>
        <ExamplesNavbar />
        <ProfilePageHeader />
        <div className="section profile-content">
          <Container>
            <CentreInfo />
            {/* <SeatMap /> */}
            <br />
            
          </Container>
          <SeatMap />
        </div>
        <DefaulterList defaulterList={this.state.defaulterList}/>
        <DemoFooter />
      </>
    );
  }
}
export default SeatPage;
