import { useDispatch, useSelector } from "react-redux"

import "./AboutPage.css"



function AboutPage() {
    const pageState = useSelector(state => state.pages);
    const visibility = pageState.about;


    return (
        <>
            <div className="about-page">
                <div className="about-page-text-container">
                    <p>
                        I’m Ashleigh Cleghorn, welcome to my design portfolio. A portfolio usually showcases the projects or work of a designer. I believe that a portfolio should also showcase the person behind that work - interests, experiences, skills, and personality all combine to create a one-of-a-kind designer.
                    </p>
                </div>
                <div className="about-buttons"></div>
            </div>
        </>
    )
}

export default AboutPage;