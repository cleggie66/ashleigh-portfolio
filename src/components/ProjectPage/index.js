import { useSelector } from "react-redux";

import "./ProjectPage.css";
import { useEffect, useState } from "react";


function ProjectPage() {
    const pageState = useSelector(state => state.pages);
    const [activePage, setActivePage] = useState(1);
    const [leftArrowDisabled, setLeftArrowDisabled] = useState(true);
    const [rightArrowDisabled, setRightArrowDisabled] = useState(false);

    const pdfPageFiles = require.context('../../media/portfolio-pages', true);
    const pdfPages = pdfPageFiles.keys().map(image => pdfPageFiles(image));

    const visibility = pageState.index;

    function pageCheck(num) {
        if (num > activePage) {
            return "right"
        } else if (num < activePage) {
            return "left"
        } else {
            return "center"
        }
    };

    useEffect(() => {
        if (activePage <= 1) {
            setLeftArrowDisabled(true)
        } else {
            setLeftArrowDisabled(false)
        };
    }, [activePage]);

    useEffect(() => {
        if (activePage >= pdfPages.length) {
            setRightArrowDisabled(true)
        } else {
            setRightArrowDisabled(false)
        };
    }, [activePage, pdfPages.length]);

    return (
        <>
            <div className="pdf-page">
                <button
                    class="fa-solid fa-caret-left nav-arrow"
                    disabled={leftArrowDisabled}
                    onClick={() => {
                        setActivePage(activePage - 1);
                    }}
                />
                <div className="pdf-viewfinder">
                    <img src={pdfPages[0]} className={`project-pdf ${pageCheck(1)}`} alt="project-page-1" />
                    <img src={pdfPages[1]} className={`project-pdf ${pageCheck(2)}`} alt="project-page-1" />
                    <img src={pdfPages[2]} className={`project-pdf ${pageCheck(3)}`} alt="project-page-1" />
                    <img src={pdfPages[3]} className={`project-pdf ${pageCheck(4)}`} alt="project-page-1" />
                    <img src={pdfPages[4]} className={`project-pdf ${pageCheck(5)}`} alt="project-page-1" />
                    <img src={pdfPages[5]} className={`project-pdf ${pageCheck(6)}`} alt="project-page-1" />
                    <img src={pdfPages[6]} className={`project-pdf ${pageCheck(7)}`} alt="project-page-1" />
                    <img src={pdfPages[7]} className={`project-pdf ${pageCheck(8)}`} alt="project-page-1" />
                    <img src={pdfPages[8]} className={`project-pdf ${pageCheck(9)}`} alt="project-page-1" />
                    <img src={pdfPages[9]} className={`project-pdf ${pageCheck(10)}`} alt="project-page-1" />
                    <img src={pdfPages[10]} className={`project-pdf ${pageCheck(11)}`} alt="project-page-1" />
                    <img src={pdfPages[11]} className={`project-pdf ${pageCheck(12)}`} alt="project-page-1" />
                    <img src={pdfPages[12]} className={`project-pdf ${pageCheck(13)}`} alt="project-page-1" />
                    <img src={pdfPages[13]} className={`project-pdf ${pageCheck(14)}`} alt="project-page-1" />
                </div>
                <button
                    class="fa-solid fa-caret-right nav-arrow"
                    disabled={rightArrowDisabled}
                    onClick={() => {
                        setActivePage(activePage + 1);
                    }}
                />
            </div>
        </>
    )
}

export default ProjectPage;