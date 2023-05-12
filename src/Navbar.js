import React from "react";
import "./Navbar.css";

const Navbar= () =>{
    return(
        <div className="navbar">

            <ul>
                <li>Home</li>
                <li>Projects</li>
                <a href="https://drive.google.com/file/d/1qZez3HvyAMZL_ItJ11Bb-L0HimKOOHkM/view?usp=sharing" target="_blank"><li>Resume'</li></a>
                <li>About me</li>
                <li>Contact me</li>
                
            </ul>
        </div>
    )
} 

export default Navbar;