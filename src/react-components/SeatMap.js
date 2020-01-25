import React, { Component } from "react";

import '../assets/scss/seatmap.scss'


class SeatPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            numberOfPeople : "140",
            listOfPeople1 : [],
            listOfPeople2: [] ,
            defaulterList : []
        }
        
    }

    componentDidMount(){
        var temp1 = [];
        var temp2 = [];
        for (let i = 0; i <=this.state.numberOfPeople/2; i++){
            temp1.push(i+1);
        }

        for (let i = 0; i <= this.state.numberOfPeople/2; i++) {
            temp2.push(i + 1);
        }
        this.setState({
            listOfPeople1 : temp1,
            listOfPeople2 : temp2
        })
    }

    componentDidUpdate(prevProps){
        // axios.get here
        if (this.props.userID !== prevProps.userID) {
            // new array will be set into set state
            // this.setState({

            // })
        }
    }
    renderElement(person) {
        if( person.id === 2){
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
                                                            {this.renderElement(person)}
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
