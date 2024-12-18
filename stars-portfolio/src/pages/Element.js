import React from 'react';
import Omakuva from "../omakuva.js";
import Header from "../header.js";

function Element(props) {
    return(
        <div className="element">
            <h2>{ props.projekti }</h2>
            <img src={props.image} alt="project_image"/>
            <p>{props.text}</p>
            <a href={props.link} className="btn btn_dark">LINK</a>
        </div>
    )
}
export default Element;