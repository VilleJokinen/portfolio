import React from 'react';
import ReactDOM from 'react-dom/client';
import Omakuva from "../omakuva.js"
import Header from "../header.js"

function Element(props) {
    return(
        <div class="element">
            <h2>{ props.projekti }</h2>
            <img src={props.image} alt="project_image"/>
            <p>{props.text}</p>
            <a href={props.link} class="btn btn_dark">Linkki</a>
        </div>
    )
}
export default Element;