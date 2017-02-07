import React from 'react';
import axios from 'axios';
import moment from 'moment';


export default class CreateKlass extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.departments = ['SCIENCE', 'ENGINEERING', 'LITERATURE', 'PHILOSOPHY'];
    this.create = this.create.bind(this);
  }
created(student){
  axios.get('http://localhost:9000/' + student)
  .then(function (response) {
    console.log("res" ,response);
  })
  .catch(function (error) {
    console.log(error);
});
}

  create(e){
    e.preventDefault();
    this.setState({error: null});
    // const {name, semester, credits, department, fee} = this.getFields();
    // if(!this.isValid(name, semester, fee)) return;
    // this.sendAjax(name, semester, credits, department, fee);
  }

   
  render(){
    return (
      <div className="create-klass">
        <h3>List of All Students</h3>
        <div className={this.state.error ? "error" : ""}>{this.state.error}</div>
        <form>
          <div className="form-group">
            <label>Department</label>
            <select className="form-control" ref={n => this.department = n}>
              {
                this.departments.map((d,i) => {
                  return <option key={i} value={d}>{d.toLowerCase()}</option>
                })
              }
            </select>
          </div>
        </form>
      </div>
    );
  }
}