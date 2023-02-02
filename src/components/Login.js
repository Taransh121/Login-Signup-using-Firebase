import React, { Component } from 'react';
import fire from '../config/Firebase';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            phone:"",
            image:""
        }
    }
    login=(e)=>{
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((x)=>{
            console.log(x)
        }).catch((error)=>{
            console.log(error)
        })
    }
    signup=(e)=>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((x)=>{
            console.log(x)
        }).catch((error)=>{
            console.log(error)
        })
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
        // console.log(this.state)
    }
    
    render() {
        
        return (
            <div >
                <form className='container my-5'>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address(Required)</label>
                        <input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" onChange={this.handleChange} value={this.state.email} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pw" className="form-label">Password(Required)</label>
                        <input type="password" name='password' className="form-control" id="pw" onChange={this.handleChange} value={this.state.password} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number (Required only while Signing up as a new user) </label>
                        <input type="number" name='phone' className="form-control" id="phone" onChange={this.handleChange} value={this.state.phone} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="img" className="form-label">Image (Required only while Signing up as a new user)</label>
                        <input type="file" name='image' className="form-control" id="img" onChange={this.handleChange} value={this.state.image} />
                    </div>
                    <button onClick={this.login} className="btn btn-outline-light mx-1">Login</button>
                    <button onClick={this.signup} className="btn btn-outline-light mx-2">Signup</button> <br /> <br />
                </form>
            </div>
        )
    }
}
