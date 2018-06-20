import React from "react";
import "./GreysFriendCard.css";

const GreysFriendCard = props => (
    <div className="card">
        <div className="img-container">
            <img onClick={() => props.friendClick(props.id)} src={props.image} alt={props.name} className="friendOnClick"/>
        </div>
    </div>
)
export default GreysFriendCard;