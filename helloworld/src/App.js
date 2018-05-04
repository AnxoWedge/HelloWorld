import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const H1 = ({classNameAcolocar, prefixoDeTexto, children}) => {
  return <div className={classNameAcolocar}> {prefixoDeTexto} o nosso h1 {children}</div>
}

const LI = ({item, dia, estado}) =>{
  return <ul><li>{item}</li> <li>{dia}</li> <li>{estado}</li></ul>
} 

/*
function H1 (props){
  return <div className={props.classNameAcolocar}> {props.prefixoDeTexto} o nosso h1 {props.children}</div>
}
*/

class App extends Component {
  render() { 
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
            <LI item="Lavar o Pato" dia="16/7/1987" estado="completo"></LI>
            <LI item="Cancelar a viagem a marte" dia="16/7/2068" estado="completo"></LI>
            <LI item="DAMN GO BACK!" dia="16/7/2077" estado="incompleto"></LI>
            
        </div>
      </div>
    );
  }
}

export default App;
