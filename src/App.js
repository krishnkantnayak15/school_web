
import React, { Component } from 'react';
import Sum from './components/Sum/Sum';
import '../src/components/Sum/Sum.css' ;
import Box from './components/Box/Box';
import List from './components/List/List';
import CreateStudent from './components/CreateStudent/CreateStudent';
import CreateKlass from './components/CreateKlass/CreateKlass';
import Registration from './components/Registration/Registration';
class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className = "header-main">School Managment Portal</h1>
       
       
       
        <CreateStudent  host="http://localhost:9000" create />
         <CreateKlass host="http://localhost:9000" created={k => console.log(k)} />
        <Registration />
         
      </div>
    );
  }
}

// <Box text="krishna@gmail.com" id="3" css = "selected" click:{fn1}/>
//<Box text="chemistry" id="2" css = "empty" click:{fn2}/>
// var students = [{
//  id:3, text="text" , css="selected" click:{fn1}
//  id:4, text="swpnil" , css="selected" click:{fn2}
// }]
// <List header = "student" items={[]}>

export default App;