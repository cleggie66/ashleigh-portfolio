import { useState } from "react";

import OutlineGenerator from "../OutlineGenerator";

import coins from "../../media/png-exports/coins.png";
import collage from "../../media/png-exports/collage.png";
import collage2 from "../../media/png-exports/collage-2.png";
import cover from "../../media/png-exports/cover.png";
import david from "../../media/png-exports/david.png";
import flowers from "../../media/png-exports/flowers.png";
import houseOfBlues from "../../media/png-exports/house-of-blues.png";
import ku from "../../media/png-exports/ku.png";
import mayer from "../../media/png-exports/mayer.png";
import ornament from "../../media/png-exports/ornament.png";
import paint from "../../media/png-exports/paint.png";
import plant from "../../media/png-exports/plant.png";
import poloroid from "../../media/png-exports/poloroid.png";
import qr from "../../media/png-exports/qr.png";
import recipe from "../../media/png-exports/recipe.png";
import record from "../../media/png-exports/record.png";
import sketch1 from "../../media/png-exports/sketch-1.png";
import sketch2 from "../../media/png-exports/sketch-2.png";
import tickets from "../../media/png-exports/tickets.png";
import titleCardRectangle from "../../media/png-exports/title-card-rectangle.png";
import titleCardSquare from "../../media/png-exports/title-card-square.png";
import umbrella from "../../media/png-exports/umbrella.png";
import "./Homepage.css";


function HomePage() {
    const [offsides, setOffsides] = useState("");

    return (
        <>
            <div className="image-layer">
                <div className="title-card-rectangle">
                    <img src={titleCardRectangle} alt="0" className="core" />
                    <div onClick={() => setOffsides(offsides === "" ? "offsides" : "")} className="hit-box" />
                </div>
            </div>
            <div className="image-layer zoom outline-behind">
                <div className={`ornament ${offsides}`}>
                    <img src={ornament} alt="0" className="core" />
                    <OutlineGenerator outline="ornament" />
                </div>
            </div>
            <div className="image-layer zoom">
                <div className={`tickets ${offsides}`}>
                    <img src={tickets} alt="0" className="core" />
                    <OutlineGenerator outline="tickets" />
                </div>
            </div>
            <div className="image-layer zoom">
                <div className={`poloroid ${offsides}`}>
                    <img src={poloroid} alt="0" className="core" />
                    <OutlineGenerator outline="poloroid" />
                </div>
            </div>
            <div className="image-layer zoom">
                <div className={`sketch-1 ${offsides}`}>
                    <img src={sketch1} alt="0" className="core" />
                    <OutlineGenerator outline="sketch-1" />
                </div>
            </div>
            <div className="image-layer zoom">
                <div className={`qr ${offsides}`}>
                    <img src={qr} alt="0" className="core" />
                    <OutlineGenerator outline="qr" />
                </div>
            </div>
            <div className="image-layer zoom">
                <div className={`sketch-2 ${offsides}`}>
                    <img src={sketch2} alt="0" className="core" />
                    <OutlineGenerator outline="sketch-2" />
                </div>
            </div>
            <div className="image-layer">
                <div className={`title-card-square ${offsides}`}>
                    <img src={titleCardSquare} alt="0" className="core" />
                    <div className="hit-box" />
                </div>
            </div>
            <div className="image-layer zoom">
                <div className={`umbrella ${offsides}`}>
                    <img src={umbrella} alt="0" className="core" />
                    <OutlineGenerator outline="umbrella" />
                </div>
            </div>
            <div className="image-layer zoom">
                <div className={`house-of-blues ${offsides}`}>
                    <img src={houseOfBlues} alt="0" className="core" />
                    <OutlineGenerator outline="house-of-blues" />
                </div>
            </div>
            <div className="image-layer zoom">
                <div className={`david ${offsides}`}>
                    <img src={david} alt="0" className="core" />
                    <OutlineGenerator outline="david" />
                </div>
            </div>
            <div className="image-layer zoom outline-behind">
                <div className={`plant ${offsides}`}>
                    <img src={plant} alt="0" className="core" />
                    <OutlineGenerator outline="plant" />
                </div>
            </div>
            <div className="image-layer zoom">
                <div className={`coins ${offsides}`}>
                    <img src={coins} alt="0" className="core" />
                    <OutlineGenerator outline="coins" />
                </div>
            </div>
            <div className="image-layer zoom">
                <div className={`flowers ${offsides}`}>
                    <img src={flowers} alt="0" className="core" />
                    <OutlineGenerator outline="flowers" />
                </div>
            </div>
            <div className="image-layer zoom">
                <div className={`record ${offsides}`}>
                    <img src={record} alt="0" className="core" />
                    <OutlineGenerator outline="record" />
                </div>
            </div>
            <div className="image-layer zoom">
                <div className={`recipe ${offsides}`}>
                    <img src={recipe} alt="0" className="core" />
                    <OutlineGenerator outline="recipe" />
                </div>
            </div>
            <div className="image-layer zoom">
                <div className={`ku ${offsides}`}>
                    <img src={ku} alt="0" className="core" />
                    <OutlineGenerator outline="ku" />
                </div>
            </div>
            <div className="image-layer">
                <div className={`cover ${offsides}`}>
                    <img src={cover} alt="0" className="core" />
                    <OutlineGenerator outline="cover" />
                </div>
            </div>
            <div className="image-layer zoom">
                <div className={`mayer ${offsides}`}>
                    <img src={mayer} alt="0" className="core" />
                    <OutlineGenerator outline="mayer" />
                </div>
            </div>
            <div className="image-layer">
                <div className={`paint ${offsides}`}>
                    <img src={paint} alt="0" className="core" />
                    <OutlineGenerator outline="paint" />
                </div>
            </div>
        </>
    )
}

export default HomePage;