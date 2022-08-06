import React from "react";
import './About.css'

function About(props) {
    console.log(props)
    return (
        <div className="about__container">
            <span>
                "Freedom is freedom"
            </span>
            <span> - George Orwell</span>
        </div>
        )
}

export default About