import React from 'react';
import Button from './component/Button/Button'
import './App.css';
import Slider from './component/Slider/Slider';

function App(props) {
  return (
    <div className="App">Mon App React<br/>
    <Slider/>
      <Button text="Ok"></Button><Button text="Cancel"></Button>
   </div>
 );
}
export default App;
