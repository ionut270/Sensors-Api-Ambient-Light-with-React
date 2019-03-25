import React from "react";
import "./Equal.css";

export const Equal = props => (
    <div id={`equal-wrapper`} onClick={() => props.handleClick(props.children)}>
        {" "}
        {props.children}{" "}
    </div>
);
