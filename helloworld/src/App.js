import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const H1 = ({classNameAcolocar, prefixoDeTexto, children}) => {
  return <div className={classNameAcolocar}> {prefixoDeTexto} o nosso h1 {children}</div>
}

const LI = ({item, data, estado}) =>{
  return <li><span>{item}</span> <span>{data.toLocaleString()}</span> <span>{estado ? "Completo" : "Incompleto"}</span></li>
} 

const Todolist = () =>{
  return (  <ul>          
  <LI item="Lavar o Pato" data={ new Date(1987,7,16)} estado={true}/>
  <LI item="Cancelar a viagem a marte" data={new Date(2068,7,16)} estado={false}/>
  <LI item="DAMN GO BACK!" data={new Date(2077,7,16)} estado={false}/>
  </ul>)
}
/*
function H1 (props){
  return <div className={props.classNameAcolocar}> {props.prefixoDeTexto} o nosso h1 {props.children}</div>
}
*/

class App extends Component {
  constructor(props){
    super(props); // sempre invocar este/ constructor da class Component
    this.state= {
      newDate: new Date()
    }

  }
  //por ordem 
  componentWillMount(){
    console.log('componentWillMount');
    this.interval = setInterval(()=>{
      this.setState({newDate: new Date()})
    },900)
  }
  componentDidMount(){
    console.log('componentDidMount');
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return this.state.newDate.getSeconds()% 2 === 0 ? true : false ;
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  render() { 
    console.log('RENDER')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <H1 className="App-title" prefixoDeTexto="Prefixo do texto do header"> Welcome to React </H1>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Abaixo encontra-se uma lista :V
        </p>
        <div className="Todolist">
            <Todolist/>
        </div>
        <div>
          { !!this.state.newDate ? this.state.newDate.toLocaleString() : "" }
          </div>
      </div>
    );
  }
}

export default App;
