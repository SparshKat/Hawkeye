import React, { Component } from "react";
import axios from 'axios'
import '../assets/scss/seatmap.scss'


class SeatPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            numberOfPeople : "142",
            listOfPeople1 : [],
            listOfPeople2: [] ,
            defaulterList : []
        }
        
    }

    componentDidMount(){
        // var self = this;
        // var temp1 = [];
        // var temp2 = [];
        this.axiosGet();
        
    }

    axiosGet(){
        var self = this;
        var temp1 = [];
        var temp2 = [];
        axios.get('http://localhost:8080/defaultTestData.json').then(data => {
            
            // console.log(data.data.personList.length);
            // (list.data.personList).map((person,i) =>{
            //     console.log(person.name + "-> " + i);
            // })
            var tempNumber = data.data.personList.length;
            (data.data.personList).map((person, i) => {
                if(i <= tempNumber/2){
                    temp1.push(person);
                    // console.log(person.name);
                    // self.setState({

                    // })
                } else {
                    temp2.push(person);
                }
            })
            self.setState({
                listOfPeople1 : temp1,
                listOfPeople2 : temp2
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
    
    renderElement(id) {
        console.log(id);
        if( id === "2"){
            return(
                <div className="changed">
                </div>
            );
        } else {
            return(
                <div className="default">
                </div>
            );
        }
    }

    render() {
        return (

                <div className="container">
                <div className="row mb-3 mx-md-5">
                        <div className="col-6 ml-auto mr-auto text-center">
                        <div className="ml-auto mr-auto text-center font-weight-bold">Column 1</div>
                        </div>
                        <div className="col-6">
                        <div className="ml-auto mr-auto text-center font-weight-bold">Column 2</div>
                        </div>
                    </div>
                    <div className="row mx-md-5">
                        <div className="offset-2 offset-md-1 col-4">
                            <div className="row no-gutters">
                                {console.log(this.state.listOfPeople1.length + "Yeah BC") }
                                {
                                    
                                    // var num1 = this.state.listOfPeople1
                                    this.state.listOfPeople1.map((person, i) => {
                                        console.log(person);
                                        return (
                                                <div className="col-3 col-md-2">
                                                    <ol>
                                                        <li>
                                                            {this.renderElement(person.id)}
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
                                        // console.log(typeof(person.id));
                                        return (
                                            <div className="col-3 col-md-2">
                                                    <ol>
                                                        <li>
                                                            {this.renderElement(person.id)}
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
                    <div class="mt-5 ml-auto mr-auto text-center font-weight-bold"> Board This Way</div>
                    </div>
                <div className="row">
                    {/* <div className="ml-4 ml-md-2 col-1 col-md-2">

                    </div> */}
                    <div className="mt-2 col-md-6 col-lg-7 mx-lg-auto">
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
