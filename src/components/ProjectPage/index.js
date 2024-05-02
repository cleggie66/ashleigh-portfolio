import { useSelector } from "react-redux";

import "./ProjectPage.css";
import pdfPage1 from "../../media/portfolio-pages/01-kyn.png"
import { useState } from "react";


function ProjectPage() {
    const pageState = useSelector(state => state.pages);
    const [activePage, setActivePage] = useState(1);

    const pdfPageFiles = require.context('../../media/portfolio-pages', true);

    const pdfPages = pdfPageFiles.keys().map(image => pdfPageFiles(image));


    const visibility = pageState.index;

    function pageCheck(num) {
        console.log({num});
        console.log({activePage});

        if (num > activePage) {
            return "right"
        } else if (num < activePage) {
            return "left"
        } else {
            return "center"
        }
    };

    return (
        <>
            <div className="project-pdf-page">
                <i
                    class="fa-solid fa-caret-left"
                    onClick={() => {
                        setActivePage(activePage - 1);
                    }}
                />
                <img src={pdfPages[0]} className={`project-pdf ${pageCheck(1)}`} alt="project-page-1" />

                <i
                    class="fa-solid fa-caret-right"
                    onClick={() => {
                        setActivePage(activePage + 1);
                    }}
                />
            </div>
        </>
    )
}

export default ProjectPage;