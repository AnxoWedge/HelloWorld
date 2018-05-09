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
      newDate: new Date(),
      estado: "on",
      ticking: true
    }
    this.toggleTick = this.toggleTick.bind(this);

  }
  //por ordem 
  componentWillMount(){
   // console.log('componentWillMount');
    this.setupTick(this.state.ticking)
    // bind é um metodo para definir o scope de execução da função 
  }
  componentDidMount(){
    //console.log('componentDidMount');
  }
  componentWillReceiveProps(){
   // console.log('componentWillReceiveProps');
  }
  shouldComponentUpdate(){
   // console.log('shouldComponentUpdate');
    return true; //this.state.newDate.getSeconds()% 2 === 0 ? true : false ;
  }
  componentWillUpdate(){
    //console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    //console.log('componentDidUpdate');
  }
  componentWillUnmount(){
    //console.log('componentWillUnmount');
  }
  tick(){
    this.setState({newDate: new Date()})
  }

  setupTick(doTick) {
    if(doTick){
      this.interval = setInterval(this.tick.bind(this), 1000)
      this.tick()
    } else {
      clearInterval(this.interval);
    }
  }

  toggleTick(){
    this.setState(prevState => {
      let nextTickState = !this.state.ticking;
      this.setupTick(nextTickState);
      console.log(nextTickState)
      return {
      ticking: nextTickState  
        }
    });
    



/*
    console.log(this.interval, 'toggle tickorino');
    console.log(this.state.estado)


    if(this.state.estado ===  "on"){
      this.setState({estado:"off"})
    }else{
      this.setState({estado:"on"})
    }*/
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
        <div>
          { this.state.ticking ? "Ticking" : "Not Ticking"}
        </div>
        <div>
          <button onClick={this.toggleTick}>{ this.state.ticking ? "Parar Relógio" : "Iniciar relógio"}</button>
        </div>
      </div>
    );
  }
}

export default App;
