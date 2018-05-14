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
      ticking: true,
      frase: "quackerino",
      fraserino:[],
      frase_add: "",
      estado_frase: "",
      update_message:"",

    }
    this.toggleTick = this.toggleTick.bind(this);
    this.randomNumber=this.randomNumber.bind(this);
    this.adderino=this.adderino.bind(this);
    this.inputHandlerino=this.inputHandlerino.bind(this);
    this.adderinoHandlerino=this.adderinoHandlerino.bind(this);
    this.handleSubmiterino=this.handleSubmiterino.bind(this);

  }
  //por ordem 
  componentWillMount(){
   // console.log('componentWillMount');
    this.setupTick(this.state.ticking)
    // bind é um metodo para definir o scope de execução da função 
    this.setRandomPhrase()
    this.getLocalFrases()

  }
  componentDidMount(){
    //console.log('componentDidMount');
    this.frase_add.focus()
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


setfrase(frase){
  const FrasesState = this.state.fraserino;
  //let newSentence = this.valueGetter();
  FrasesState.push('whaterino?')
}

adderino(){
this.setfrase();
}


//random phrase
setRandomPhrase(){
  const frasesAUtilizar = this.state.fraserino;
  let fraseIndex = Math.round(Math.random()*(frasesAUtilizar.length - 1));
  this.setState({frase: frasesAUtilizar[fraseIndex]});
}
randomNumber(){
    this.setRandomPhrase();
  
}

inputPosterino(){
  const FrasesState = this.state.fraserino;
  FrasesState.push(this.state.frase_add)
}

adderinoHandlerino(){
  this.inputPosterino()
}


//submiterino

handleSubmiterino(event){
  event.preventDefault();
 if(this.state.frase_add !==""){

  this.state.fraserino.push(this.state.frase_add);
  this.setfrase({fraserino:this.state.fraserino,
  frase_add:" ",});

  this.setLocalFrases(this.state.fraserino)
  this.frase_add.focus();
  }
  else{
    alert("Quack")
  }  
  this.setLocalFrases(this.state.fraserino)
}

handleRemoverino(fraseIndex,e){
  console.log(fraseIndex,e)
  this.state.fraserino.splice(fraseIndex,1)
  this.setState({fraserino:this.state.fraserino})
  this.setLocalFrases(this.state.fraserino)
}

// Tick
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
      return {
      ticking: nextTickState  
        }
    });
  }
  //Adding Frase to state array
inputHandlerino(event){
  this.setState({
    [event.target.name]: event.target.value 
  });
}

getLocalFrases(){
  let fraserino = localStorage.getItem('fraserino')
  console.log("fraserino", fraserino);
  if (fraserino===null){
    fraserino=[];
  }else{
    fraserino = JSON.parse(fraserino)
  }
  this.setState({fraserino})
}

setLocalFrases(fraserino){
  this.setState({update_message:" A gravar"})
  localStorage.setItem("fraserino", JSON.stringify(fraserino))
  setTimeout(()=>{
    this.setState({update_message: " "})
  }, 2000)
}


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

        <div>
          <p> Frase Aleatória é: {this.state.frase}</p>
          <button onClick={this.randomNumber}>Punch me</button>
        </div>

        <div>
          <ul>
            {this.state.fraserino.map((item, index)=>{
              return <li key={"frase" + index}> {item} <button onClick={this.handleRemoverino.bind(this, index)}> Remove</button></li>
            })}
          </ul>
        </div>

        <div>
          <button onClick={this.adderino}>MORE CRAP</button>
          
        </div>
        <div>
          {this.state.update_message}
          <form onSubmit={this.handleSubmiterino}>
          <input type="text" className="insert" name="frase_add" value={this.state.frase_add} onChange={this.inputHandlerino} ref={el => this.frase_add=el}/>
          <select name="estado_frase" value={this.state.estado_frase} onChange={this.inputHandlerino}>
            <option value="feito">Feito</option>
            <option value="nada feito">NADA FEITO</option>
          
          </select>

          <button > HIT ME </button>
          </form>
          <p>{this.state.frase_add}</p>
        </div>
      </div>
    );
  }
}
// 
export default App;
