import React from "react";
import "./Title.css";

const Title = props => <h1 className="jumbotron col-md-12">{props.children}</h1>;

export default Title;