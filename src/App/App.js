import React from 'react';
import Button from './component/Button/Button'
import Slider from './component/Slider/Slider';
import InputText from './component/InputText/InputText';

import './App.css';

import Images from './component/Images/Images';
import Meme from './component/Meme/Meme';
let images = [{ "id": 1, "url": "img/plonge.jpg" }, { "id": 2, "url": "img/homer1.gif" }, { "id": 3, "url": "img/futurama1.jpg" }, { "id": 4, "url": "img/farnswoth.jpg" }, { "id": 5, "url": "img/fry1.jpg" }, { "id": 6, "url": "img/trololo.jpg" }];
let meme = { "id": 1, "imageId": 1, "ext": [{ "x": 0, "y": 0, "value": "dev react" }], "image": { "id": 1, "url": "img/plonge.jpg" } };
function App(props) {
   var valueState=true;
  var sliderToggle=(sliderState)=>{
    valueState=sliderState.checked;
    console.log(valueState);
  }
  var textchanged=(evt)=>{
    
  }
  return (<>
    <div className="head">
      Meme Maker
  </div>
    <div className="App">
      <Images images={images}></Images>
          <Slider value={valueState} onClick={sliderToggle}/><br/>{valueState.toString()}
      <InputText onChange={textchanged}></InputText>
      <Button text="Ok"></Button><Button text="Cancel"></Button>
    </div></>
  );
}
export default App;
