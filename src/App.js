
import { Component } from 'react';
import {useState} from 'react'
import './App.css';
import React from 'react'

class List extends Component{
constructor(props){
  console.log("constructor()")
  super(props);
  this.state ={
    interval: null,
    timer :0
  };
}
componentDidMount(){
console.log("componentDidMount()");
this.setState({
  interval : setInterval(() => {
  this.setState({timer: this.state.timer+1})
}, 1000)
})

}
componentDidUpdate(){
  console.log("componentDidUpdate()");
}

state={
  isVisible: false
}

 Aperson=[
  'FullName : Ennsaf Mabrouk',
  'bio: Geosciences Engineer converted to Full Stack JS Developer ',
  'Profession: Full Stack JS Developer'
 ]

 
 toggleVisibility = () => {
   this.setState({
     isVisible : !this.state.isVisible
   })
 }

render() {
  console.log("render()")
  return (
    <div>
      <button className="visibility-btn" onClick={this.toggleVisibility}>show profile</button>
      {this.state.isVisible ?
      (<ul className="list">
    {this.Aperson.map((info,i) => (
      <li key={i}>{info}</li>
    ))}
    </ul>) : (<h3>click on the button to show profile</h3>)
    
}
<h3>{this.state.timer}  </h3>
    
    
    </div>
  );
}
}

export default List;
