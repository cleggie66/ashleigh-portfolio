import { useDispatch, useSelector } from "react-redux"

import "./AboutPage.css"



function AboutPage() {
    const pageState = useSelector(state => state.pages);
    const visibility = pageState.about;


    return (
        <>
            <div className={`about-page ${visibility}`}>
                <div className="about-page-text-container">
                    <p>
                        I’m Ashleigh Cleghorn, welcome to my design portfolio. A portfolio usually showcases the projects or work of a designer. I believe that a portfolio should also showcase the person behind that work - interests, experiences, skills, and personality all combine to create a one-of-a-kind designer.
                    </p>
                </div>
                <div className="about-buttons">
                    <a href="mailto: apcleghorn27@gmail.com" target="_blank" rel="noopener noreferrer">
                        <button className="about-button">
                            Contact
                        </button>
                    </a>
                    <a href="https://drive.google.com/file/d/1Q1Iqbwz_Q2xbUBHG_nfkTLyb-bDS0tYe/view?usp=sharing"
                        target="_blank" rel="noopener noreferrer">
                        <button className="about-button">
                            Resume
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/ashleighcleghorn/" target="_blank" rel="noopener noreferrer">
                        <button className="about-button">
                            <i className="fa-brands fa-linkedin" />
                        </button>
                    </a>
                    <a href="https://www.instagram.com/cleghorn_creative/"
                        target="_blank" rel="noopener noreferrer">
                        <button className="about-button">
                            <i class="fa-brands fa-instagram" />
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default AboutPage;