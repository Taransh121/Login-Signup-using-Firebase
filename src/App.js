import React, { Component } from 'react'
import fire from "./config/Firebase";
import Home from "./components/Home";
import Login from "./components/Login" 



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount(){
    this.authListener()
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user})
      }
      else{
        this.setState({user:null})
      }
    })
  }
  render() {
    return (
      <div className='App'>
        {this.state.user ? (<Home/>) : (<Login/>)}
      </div>
    )
  }
}


