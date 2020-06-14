import React from 'react';
import './App.css';
import Images from './component/Images/Images';

let images = [{ "id": 1, "url": "img/plonge.jpg" }, { "id": 2, "url": "img/homer1.gif" }, { "id": 3, "url": "img/futurama1.jpg" }, { "id": 4, "url": "img/farnswoth.jpg" }, { "id": 5, "url": "img/fry1.jpg" }, { "id": 6, "url": "img/trololo.jpg" }];
let meme = { "id": 1, "imageId": 1, "ext": [{ "x": 0, "y": 0, "value": "dev react" }], "image": { "id": 1, "url": "img/plonge.jpg" } };
function App(props) {
  return (<>
    <div className="head">
      Meme Maker
  </div>
    <div className="App">
      <Images images={images}></Images>
    </div></>
  );
}
export default App;
