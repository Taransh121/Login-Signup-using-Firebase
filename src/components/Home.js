import React, { Component } from 'react';
import fire from '../config/Firebase';
import "./Home.css"

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    logout=()=>{
        fire.auth().signOut()

    }
    render() {
        return (
            <div>
                <h1 style={{fontSize:"120px",textAlign:"center"}}>Welcome to Application</h1>
                <button onClick={this.logout} style={{height:"70px",width:"200px",fontSize:"35px",marginLeft:"40%",marginTop:"5%"}} className="btn btn-outline-light">Logout</button>
            </div>
        )
    }
}

