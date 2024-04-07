import titleCardSquare from "../../media/png-exports/title-card-square.png";
import titleCardSquareText from "../../media/png-exports/title-card-square-text.png";

import card2 from "../../media/png-exports/card-2.png";
import card3 from "../../media/png-exports/card-3.png";
import card4 from "../../media/png-exports/card-4.png";
import card6 from "../../media/png-exports/card-6.png";
import card7 from "../../media/png-exports/card-7.png";
import card11 from "../../media/png-exports/card-11.png";
import card12 from "../../media/png-exports/card-12.png";
import card16 from "../../media/png-exports/card-16.png";
import card17 from "../../media/png-exports/card-17.png";

import num1 from "../../media/number-exports/01.png";
import num2 from "../../media/number-exports/02.png";
import num3 from "../../media/number-exports/03.png";
import num4 from "../../media/number-exports/04.png";
import num5 from "../../media/number-exports/05.png";
import num6 from "../../media/number-exports/06.png";
import num7 from "../../media/number-exports/07.png";
import num8 from "../../media/number-exports/08.png";
import num9 from "../../media/number-exports/09.png";




import "./ProjectList.css"


function ProjectList() {

    return (
        <>
            <div className="image-layer">
                <div className={`title-card-index`}>
                    <img src={titleCardSquareText} alt="0" className="title-card-text" />
                    <img src={titleCardSquare} alt="0" className="core" />
                    <div className="hit-box" />
                </div>
            </div>
            <div className="image-layer">
                <div className="project1">
                    <img src={num1} alt="0" className="title-card-number" />
                    <img src={card4} alt="0" className="core" />
                </div>
            </div>
            <div className="image-layer">
                <div className="project2">
                    <img src={num2} alt="0" className="title-card-number" />
                    <img src={card11} alt="0" className="core" />
                </div>
            </div>
            <div className="image-layer">
                <div className="project3">
                    <img src={num3} alt="0" className="title-card-number" />
                    <img src={card12} alt="0" className="core" />
                </div>
            </div>
            <div className="image-layer">
                <div className="project4">
                    <img src={num4} alt="0" className="title-card-number" />
                    <img src={card7} alt="0" className="core" />
                </div>
            </div>
            <div className="image-layer">
                <div className="project5">
                    <img src={num5} alt="0" className="title-card-number" />
                    <img src={card2} alt="0" className="core" />
                </div>
            </div>
            <div className="image-layer">
                <div className="project6">
                    <img src={num6} alt="0" className="title-card-number" />
                    <img src={card16} alt="0" className="core" />
                </div>
            </div>
            <div className="image-layer">
                <div className="project7">
                    <img src={num7} alt="0" className="title-card-number" />
                    <img src={card17} alt="0" className="core" />
                </div>
            </div>
            <div className="image-layer">
                <div className="project8">
                    <img src={num8} alt="0" className="title-card-number" />
                    <img src={card6} alt="0" className="core" />
                </div>
            </div>
            <div className="image-layer">
                <div className="project9">
                    <img src={num9} alt="0" className="title-card-number" />
                    <img src={card3} alt="0" className="core" />
                </div>
            </div>
        </>
    )
}

export default ProjectList;