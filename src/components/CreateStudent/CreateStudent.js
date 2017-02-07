import React from 'react';
import axios from 'axios';
import './CreateStudent.css';

export default class CreateStudent extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.create = this.create.bind(this);
  }

  create(e){
    e.preventDefault();
    const email =  (this.email.value);
      if(email.length < 7 && email != ""){
      this.setState({error: "Email too short !!"});}
        else if(email == ""){
         this.setState({error: "Should not be null !!"});
      }

     const url = this.props.host + '/students';
     const payload = {email};
     axios.post(url, payload)
     .then(rsp => {
       const student = rsp.data;
       this.props.create(student);
       this.email.value = '';
       //this.student.email.value = '';
     }).catch(e => this.setState({error: e.message}));
  }
  

  render(){
    return (
      <div className="create-student">
        <h4 className="header" >Create Student</h4>
        <div className={this.state.error ? "error" : ""}>{this.state.error}</div>
        <form>
          <div className="form-group">
            <label>Email Address</label>
            <input placeholder="student@allstate.com" className="form-control" ref={n => this.email = n} type="email" />
          </div>
          <button className="btn btn-danger btn-small" onClick={this.create}>Create</button>
        </form>
      </div>
    );
  }
}