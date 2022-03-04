import React from "react";
import photo from '../images/photo.png';
import email from '../images/email.png';
import linkedin from '../images/linkedin.png';



export default function Info(){
    return(
        <div>
            <img src={photo} alt="logo"/>
            <h2 className="h2-info">Laura Smith</h2>
            <h3 className="h3-info">Frontend Developer</h3>
            <h4 className="h4-info">laurasmith.website</h4>
            <div className="buttonClass">
                <button className="button1">
                    <img src={email} alt="logo5" className="imgIcon"/>
                    Email
                </button>
                <button className="button2">
                    <img src={linkedin} alt="logo6" className="imgIcon"/>
                    linkedIn
                </button>
            </div>

        </div>
    )
}