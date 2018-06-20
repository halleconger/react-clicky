import React from "react";
import "./Navbar.css";

const Nav = props => (
    <nav className="col-md-12 navbar">
        <div className="col-md-4" id="title"> 
            {props.title}
        </div>
        <div className="col-md-4" id="score"> 
            Score: {props.score}  
        </div>
        <div className="col-md-4" id="topScore"> 
            Top Score: {props.topScore}
        </div>
    </nav>
)

export default Nav;