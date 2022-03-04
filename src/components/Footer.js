import React from "react";
import facebook from '../images/Facebook Icon.png';
import insta from '../images/Instagram Icon.png';
import github from '../images/GitHub Icon.png';
import twitter from '../images/Twitter Icon.png';

export default function Footer(){
    return(
        <nav className="navbar">
            <img src={facebook} alt="logo1"/>
            <img src={insta} alt="logo2"/>
            <img src={github} alt="logo3"/>
            <img src={twitter} alt="logo4"/>
        </nav>
    )

}