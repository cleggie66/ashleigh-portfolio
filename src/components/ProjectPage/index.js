import { useDispatch, useSelector } from "react-redux";

import "./ProjectPage.css";
import { useEffect, useState } from "react";

import num1 from "../../media/number-exports/01.png";
import num2 from "../../media/number-exports/02.png";
import num3 from "../../media/number-exports/03.png";
import num4 from "../../media/number-exports/04.png";
import num5 from "../../media/number-exports/05.png";
import num6 from "../../media/number-exports/06.png";
import num7 from "../../media/number-exports/07.png";
import num8 from "../../media/number-exports/08.png";
import { setProject } from "../../store/activeProject";



function ProjectPage() {
    const dispatch = useDispatch();

    const pageState = useSelector(state => state.pages);
    const projectState = useSelector( state => state.activeProject);

    const [activePage, setActivePage] = useState(1);
    const [leftArrowDisabled, setLeftArrowDisabled] = useState(true);
    const [rightArrowDisabled, setRightArrowDisabled] = useState(false);

    const pdfPageFiles = require.context('../../media/portfolio-pages', true);
    const pdfPages = pdfPageFiles.keys().map(image => pdfPageFiles(image));

    const visibility = pageState.projects;
    const activeProject = projectState.activeProject;
    console.log({ activeProject })

    function pageCheck(num) {
        if (num > activeProject) {
            return "right"
        } else if (num < activeProject) {
            return "left"
        } else {
            return "center"
        }
    };

    useEffect(() => {
        if (activeProject <= 1) {
            setLeftArrowDisabled(true)
        } else {
            setLeftArrowDisabled(false)
        };
    }, [activeProject]);

    useEffect(() => {
        if (activeProject >= pdfPages.length) {
            setRightArrowDisabled(true)
        } else {
            setRightArrowDisabled(false)
        };
    }, [activeProject, pdfPages.length]);

    return (
        <>
            <div className="pdf-page">
                <div className="pdf-main-content">
                    <button
                        class={`fa-solid fa-caret-left nav-arrow ${visibility}`}
                        disabled={leftArrowDisabled}
                        onClick={() => {
                            dispatch(setProject(activeProject - 1))
                        }}
                    />
                    <div className={`pdf-viewfinder ${visibility}`}>
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
                        class={`fa-solid fa-caret-right nav-arrow ${visibility}`}
                        disabled={rightArrowDisabled}
                        onClick={() => {
                            dispatch(setProject(activeProject + 1))
                        }}
                    />
                </div>
                <div className="index-numbers">
                    <img
                        src={num1} alt="0" onClick={() => dispatch(setProject(1))}
                        className={`index-number one ${visibility} ${activeProject === 1 ? "highlighted" : ""}`} />
                    <img
                        src={num2} alt="0" onClick={() => dispatch(setProject(2))}
                        className={`index-number two ${visibility} ${activeProject > 1 && activeProject < 5 ? "highlighted" : ""}`} />
                    <img
                        src={num3} alt="0" onClick={() => dispatch(setProject(5))}
                        className={`index-number three ${visibility} ${activeProject > 4 && activeProject < 9 ? "highlighted" : ""}`} />
                    <img
                        src={num4} alt="0" onClick={() => dispatch(setProject(9))}
                        className={`index-number four ${visibility} ${activeProject === 9 ? "highlighted" : ""}`} />
                    <img
                        src={num5} alt="0" onClick={() => dispatch(setProject(10))}
                        className={`index-number five ${visibility} ${activeProject === 10 ? "highlighted" : ""}`} />
                    <img
                        src={num6} alt="0" onClick={() => dispatch(setProject(11))}
                        className={`index-number six ${visibility} ${activeProject > 10 && activeProject < 13 ? "highlighted" : ""}`} />
                    <img
                        src={num7} alt="0" onClick={() => dispatch(setProject(13))}
                        className={`index-number seven ${visibility} ${activeProject === 13 ? "highlighted" : ""}`} />
                    <img
                        src={num8} alt="0" onClick={() => dispatch(setProject(14))}
                        className={`index-number eight ${visibility} ${activeProject === 14 ? "highlighted" : ""}`} />
                </div>
            </div>
        </>
    )
}

export default ProjectPage;