import { useDispatch, useSelector } from "react-redux"

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

import title1 from "../../media/index-title-exports/title-1.png";
import title2 from "../../media/index-title-exports/title-2.png";
import title3 from "../../media/index-title-exports/title-3.png";
import title4 from "../../media/index-title-exports/title-4.png";
import title5 from "../../media/index-title-exports/title-5.png";
import title6 from "../../media/index-title-exports/title-6.png";
import title7 from "../../media/index-title-exports/title-7.png";
import title8 from "../../media/index-title-exports/title-8.png";

import testSrc from "../../media/title-underline-exports/title-1-underline/title-1-underline14.png"

import "./ProjectList.css"
import UnderlineGenerator from "../UnderlineGenerator";


function ProjectList() {
    const pageState = useSelector(state => state.pages);
    const visibility = pageState.index;


    const projectCardItems = [
        {
            name: "project1",
            numSrc: num1,
            cardSrc: card4,
            titleSrc: title1,
            startingPage: 1,
        },
        {
            name: "project2",
            numSrc: num2,
            cardSrc: card11,
            titleSrc: title2,
            startingPage: 2,
        },
        {
            name: "project3",
            numSrc: num3,
            cardSrc: card12,
            titleSrc: title3,
            startingPage: 5,
        },
        {
            name: "project4",
            numSrc: num4,
            cardSrc: card7,
            titleSrc: title4,
            startingPage: 9,
        },
        {
            name: "project5",
            numSrc: num5,
            cardSrc: card2,
            titleSrc: title5,
            startingPage: 10,
        },
        {
            name: "project6",
            numSrc: num6,
            cardSrc: card16,
            titleSrc: title6,
            startingPage: 11,
        },
        {
            name: "project7",
            numSrc: num7,
            cardSrc: card17,
            titleSrc: title7,
            startingPage: 13,
        },
        {
            name: "project8",
            numSrc: num8,
            cardSrc: card6,
            titleSrc: title8,
            startingPage: 14,
        }
    ]


    return (
        <>  
            {
                projectCardItems.map((item) => {
                    return (
                        <div className="image-layer">
                            <div className={`${item.name} ${visibility} project-index-card`}>
                                <img src={item.numSrc} alt="0" className="title-card-number" />
                                <img src={item.titleSrc} alt="0" className="index-card-title" />
                                <UnderlineGenerator underline={item.name} onClickPage="projects" onClickProject={item.startingPage}/>
                                <img src={item.cardSrc} alt="0" className="core" />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ProjectList;