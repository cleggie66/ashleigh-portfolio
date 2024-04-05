import collage2 from "../../media/png-exports/collage-2.png";

import card1 from "../../media/png-exports/card-1.png";
import card2 from "../../media/png-exports/card-2.png";
import card4 from "../../media/png-exports/card-4.png";
import card6 from "../../media/png-exports/card-6.png";
import card7 from "../../media/png-exports/card-7.png";
import card8 from "../../media/png-exports/card-8.png";
import card9 from "../../media/png-exports/card-9.png";
import card12 from "../../media/png-exports/card-12.png";
import card16 from "../../media/png-exports/card-16.png";


import "./ProjectList.css"


function ProjectList() {

    return (
        <>
            <div className="image-layer">
                <div className="card7">
                    <img src={card7} alt="0" className="core" />
                </div>
            </div>
            <div className="image-layer">
                <div className="card6">
                    <img src={card6} alt="0" className="core" />
                </div>
            </div>
            <div className="image-layer">
                <div className="card9">
                    <img src={card9} alt="0" className="core" />
                </div>
            </div>
            <div className="image-layer">
                <div className="card2">
                    <img src={card2} alt="0" className="core" />
                </div>
            </div>
            <div className="image-layer">
                <div className="card8">
                    <img src={card8} alt="0" className="core" />
                </div>
            </div>
            <div className="image-layer">
                <div className="card16">
                    <img src={card16} alt="0" className="core" />
                </div>
            </div>
            <div className="image-layer">
                <div className="card1">
                    <img src={card1} alt="0" className="core" />
                </div>
            </div>
            <div className="image-layer">
                <div className="card12">
                    <img src={card12} alt="0" className="core" />
                </div>
            </div>
            <div className="image-layer">
                <div className="card4">
                    <img src={card4} alt="0" className="core" />
                </div>
            </div>
            <div className={`collage-layer`}>
                <img src={collage2} alt="0" className="collage-2" />
            </div>
        </>
    )
}

export default ProjectList;