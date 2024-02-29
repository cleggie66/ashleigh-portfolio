import { useState } from "react";

import coin1 from "./media/png-exports/coin-1.png";
import coin2 from "./media/png-exports/coin-2.png";
import collage from "./media/png-exports/collage.png";
import cover from "./media/png-exports/cover.png";
import david from "./media/png-exports/david.png";
import flowers from "./media/png-exports/flowers.png";
import flowersOutline from "./media/png-exports/flowers-outline.png";
import houseOfBlues from "./media/png-exports/house-of-blues.png";
import ku from "./media/png-exports/ku.png";
import mayer from "./media/png-exports/mayer.png";
import ornament from "./media/png-exports/ornament.png";
import paint from "./media/png-exports/paint.png";
import plainWall from "./media/png-exports/plain-wall.png";
import plant from "./media/png-exports/plant.png";
import poloroid from "./media/png-exports/poloroid.png";
import qr from "./media/png-exports/qr.png";
import recipe from "./media/png-exports/recipe.png";
import record from "./media/png-exports/record.png";
import recordOutline from "./media/png-exports/record-outline.png";
import sketch1 from "./media/png-exports/sketch-1.png";
import sketch2 from "./media/png-exports/sketch-2.png";
import tickets from "./media/png-exports/tickets.png";
import titleCardRectangle from "./media/png-exports/title-card-rectangle.png";
import titleCardSquare from "./media/png-exports/title-card-square.png";
import umbrella from "./media/png-exports/umbrella.png";


function App() {
  const [layerFocus, setLayerFocus] = useState("");

  return (
    <div className="App">
      <div className="image-layer null">
        <img src={titleCardRectangle} alt="0" className="title-card-rectangle" />
      </div>
      <div className="image-layer null">
        <img src={ornament} alt="0" className="ornament" />
      </div>
      <div className="image-layer null">
        <img src={tickets} alt="0" className="tickets" />
      </div>
      <div className="image-layer null">
        <img src={poloroid} alt="0" className="poloroid" />
      </div>
      <div className="image-layer null">
        <img src={sketch1} alt="0" className="sketch-1" />
      </div>
      <div className="image-layer null">
        <img src={qr} alt="0" className="qr" />
      </div>
      <div className="image-layer null">
        <img src={sketch2} alt="0" className="sketch-2" />
      </div>
      <div className="image-layer null">
        <img src={titleCardSquare} alt="0" className="title-card-square" />
      </div>
      <div className="image-layer null">
        <img src={umbrella} alt="0" className="umbrella" />
      </div>
      <div className="image-layer null">
        <img src={houseOfBlues} alt="0" className="house-of-blues" />
      </div>
      <div className="image-layer null">
        <img src={david} alt="0" className="david" />
      </div>
      <div className="image-layer null">
        <img src={plant} alt="0" className="plant" />
      </div>
      <div className="image-layer null">
        <img src={coin1} alt="0" className="coin-1" />
      </div>
      <div className="image-layer null">
        <img src={coin2} alt="0" className="coin-2" />
      </div>
      <div className="image-layer">
        <div className="flowers">
          <img
            src={flowers} alt="0" className="core"
          />
          <div
            onMouseEnter={() => setLayerFocus("-active")}
            onMouseLeave={() => setLayerFocus("")}
            className="hit-box" />
          <img
            src={flowersOutline} alt="0" className="sub outline"
          />
        </div>
      </div>
      <div className="image-layer">
        <div className="record">
          <img
            src={record} alt="0" className="core"
          />
          <div
            onMouseEnter={() => setLayerFocus("-active")}
            onMouseLeave={() => setLayerFocus("")}
            className="hit-box" />
          <img
            src={recordOutline} alt="0" className="sub outline"
          />
        </div>
      </div>
      <div className="image-layer null">
        <img src={recipe} alt="0" className="recipe" />
      </div>
      <div className="image-layer null">
        <img src={ku} alt="0" className="ku" />
      </div>
      <div className="image-layer null">
        <img src={mayer} alt="0" className="mayer" />
      </div>
      <div className="image-layer null">
        <img src={cover} alt="0" className="cover" />
      </div>
      <div className="image-layer null">
        <img src={paint} alt="0" className="paint" />
      </div>
      <div className={`black-layer${layerFocus}`}>
        <img src={plainWall} alt="0" className="background" />
      </div>
      <div className="background-container">
        <img src={plainWall} alt="0" className="background"/>
      </div>
    </div>
  );
}

export default App;
