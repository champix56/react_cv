import React from 'react';
import Button from './component/Button/Button'
import './App.css';
import Slider from './component/Slider/Slider';

function App(props) {
  var valueState=true;
  var sliderToggle=(sliderState)=>{
    valueState=sliderState.checked;
    console.log(valueState);
  }
  return (
    <div className="App">Mon App React<br/> 
    <Slider value={valueState} onClick={sliderToggle}/><br/>{valueState.toString()}
      <Button text="Ok"></Button><Button text="Cancel"></Button>
   </div>
 );
}
export default App;
