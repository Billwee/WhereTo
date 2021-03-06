import React from "react";
import styled from "styled-components";


const Disabled = styled.button `
float: right;
background-color: #8A93B0;
opacity: 0.7;
padding: 5px;
margin: 2px;
font-style; italic;
border-radius: 8px;
color: #142660;
text-decoration: none;
width: 125px;

&:hover {
    color: black;
    background-color: black;
    cursor: pointer;
    border: none;
`
const Save = styled.button `
float: right;
background-color: #146028;
padding: 5px;
margin: 2px;
border-radius: 8px;
color: white;
text-decoration: none;
width: 75px;

&:hover {
    opacity: 0.8;
    box-shadow: 0px 0px 3px 3px gray;
}
`

const Site = styled.button `
float: right;
background-color: #142660;
padding: 5px;
margin: 2px;
border-radius: 8px;
color: white;
text-decoration: none;
width: 125px;

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

export const Delete = styled.span `
width: 2rem;
height: 2rem;
background-color: #A90333; 
padding-top: 3px;
padding-bottom: 3px;
color: white;
border-radius: 50%;
border: none;
text-align: center;
&:hover {
    transform: scale(0.9);
    box-shadow: 0px 0px 10px 2px rgba(16,16,16);

}`



//The ...props prints all of the passed props onto this element
export function DeleteBtn(props) {
    return(
        <Delete className="delete-btn" {...props} role="button" tabIndex="0">
        <i className="fas fa-trash-alt"></i> 
        </Delete>
    )
}

export function SiteBtn(props) {
    return(
        <Site>
            <Link href={props.href} target="_blank" rel="noopener noreferrer"> {props.children} </Link>
        </Site>
    )
}

export function DisabledBtn(props) {
    return(
        <Disabled>
             {props.children} 
        </Disabled>
    )
}

export function SeatmapBtn(props) {
    return(
        <Site>
            <Link href={props.href} target="_blank" rel="noopener noreferrer"> Seat Map </Link>
        </Site>
    )
}

export function SaveBtn(props) {
    return(
        <Save className="save-btn" {...props} tabIndex="0">
        Save 
        </Save>
    )
}



