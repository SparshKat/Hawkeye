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
import axios from 'axios'
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
          defaulterList : []
      }
    }

    componentDidMount(){
      this.axiosGet();
    }

    axiosGet(){
      var self = this;
      var temp1 = [];
      // var temp2 = [];
      axios.get('http://localhost:8080/defaultTestData.json').then(data => {
          
          // console.log(data.data.personList.length);
          // (list.data.personList).map((person,i) =>{
          //     console.log(person.name + "-> " + i);
          // })
          (data.data.personList).map((person, i) => {
            console.log(person);
              if(person.id=="2"){
                temp1.push(person);
              }
          })
          self.setState({
            defaulterList : temp1
          })
          
      }).catch(err => {
          console.log(err);
      });
  }

  componentDidUpdate(prevProps){
    // axios.get here
    setTimeout(() =>
    { this.axiosGet(); }
    , 2000);


    if (this.props.userID !== prevProps.userID) {
        console.log("Change hua hai bhai Hua hai!")
        // new array will be set into set state
        // this.setState({

        // })
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
