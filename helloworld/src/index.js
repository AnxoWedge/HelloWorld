import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ticking clock através de props na app //
/*
function tick(){
    //console.log(new Date());
ReactDOM.render(<App  newDate={new Date()}/>, document.getElementById('root'));
};
let interval1= setInterval(tick, 900);
tick()
*/

ReactDOM.render(<App/>, document.getElementById('root'));





registerServiceWorker();
/*
setInterval(function(){
    clearInterval(interval1);
    ReactDOM.render(<div> Quack </div>, document.getElementById('root'));
},5000)*/


/*
let ferrari= {
    nome:" Ferrari"
}

let Porsche = {
    nome:" Porsche"
}

function sayMyName(prefix, suffix, wat){
    console.log(`${prefix} ${this.nome} ${suffix} ${wat}`)
}

const sayMyNameFerrari = sayMyName.bind(ferrari, "HERRO", "2nd suffix"); // bind cria a referencia 
sayMyNameFerrari("1st suffix");
const sayMyNamePorsche = sayMyName.bind(Porsche); // apply cria e executa 
sayMyNamePorsche();
sayMyName();

*/