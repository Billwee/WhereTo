import React from "react";
import "./styles.css"
import styled from "styled-components";

const Site = styled.button `
float: right;
background-color: blue;
padding: 5px;
margin: 2px;
border-radius: 8px;
color: white;
text-decoration: none;

&:hover {
    opacity: 0.8;
    box-shadow: 0px 0px 3px 3px gray;
}
`
const Link = styled.a `
text-decoration: none;

&:link, :hover, :active, :visited {
    text-decoration: none;
    color: white;
    text-shadow: 0px 0px 2px black;
}
`


//The ...props prints all of the passed props onto this element
export function DeleteBtn(props) {
    return(
        <span className="delete-btn" {...props} role="button" tabIndex="0">
        Delete Book 
        </span>
    )
}

export function SiteBtn(props) {
    return(
        <Site>
            <Link href={props.href} target="_blank" rel="noopener noreferrer"> Office Site </Link>
        </Site>
    )
}

export function SaveBtn(props) {
    return(
        <button className="save-btn" {...props} tabIndex="0">
        Save Book 
        </button>
    )
}

