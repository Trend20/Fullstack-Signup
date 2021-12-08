import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state ={
      fullName: '',
      username: '',
      email: '',
      password: '',
    }
  }

  changeFullname = (event) =>{
    this.setState({
      fullName: event.target.value
    });
  }
  changeUsername = (event) =>{
    this.setState({
      username: event.target.value
    });
  }
  changeEmail = (event) =>{
    this.setState({
      email: event.target.value
    });
  }
  changePassword = (event) =>{
    this.setState({
      password: event.target.value
    });
  }

  onFormSubmit = (event) =>{
    event.preventDefault();

    const registered = {
      fullName: this.state.fullName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
  }

  render() {
    return (
      <div className="app">
        <div className="form-container">
          <form onSubmit={this.onFormSubmit}>
            <input type="text" className="form-control form-group" placeholder="FullName" value={this.state.fullName} onChange={this.changeFullname}/>
            <input type="text" className="form-control form-group" placeholder="Username" value={this.state.username} onChange={this.changeUsername}/>
            <input type="email" className="form-control form-group" placeholder="Email" value={this.state.email} onChange={this.changeEmail}/>
            <input type="password" className="form-control form-group" placeholder="Password" value={this.state.password} onChange={this.changePassword}/>
            <input type="submit" value="Submit" className="btn btn-danger btn-block" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;