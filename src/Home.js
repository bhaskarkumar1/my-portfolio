import React from "react";
import Typewriter from 'typewriter-effect';
import "./Home.css";


const name = "Hello I am Bhaskar Kumar";
const Home = () => {
  return (
    <div className="Home">
      <div className="left-part">
      <h5>Hi, There!</h5>

        <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(name).start();
        
      }}
      />
        {/* <h1>Left part</h1> */}
        <div className="social-profile">
            <ul className="pro-icon">

               <a href="https://www.linkedin.com/in/bhaskar-kumar-61a3271b3/" target="_blank"><i class="fa-brands fa-linkedin fa-beat" ></i></a>
                <a href="https://github.com/bhaskarkumar1/" target="_blank"><i class="fa-brands fa-github fa-beat"></i></a>
                <a href="https://leetcode.com/bhaskarkumar07/" target="_blank"><i class="fa-solid fa-laptop-code fa-beat"></i></a>
               <a href="https://twitter.com/bhaskarkrsingh_/" target="_blank"><i class="fa-brands fa-square-twitter fa-beat"></i></a>
            </ul>
        </div>
        </div>
        <div className="right-part">
          <img src={"profile-modified.png"} alt="profile-photo"  />
        </div>
      
    </div>
  );
};

export default Home;
