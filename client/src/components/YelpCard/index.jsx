import React, { Component } from "react";
import { Container, Row, Col } from "../Grid"
import styled from "styled-components";

const Image = styled.img `
display: block;
margin-left: auto;
margin-right: auto;
`
const ImgDes = styled.p `
font-style: italic;
text-align: center;`


function YelpCard(props) {
  return(
    <Container>
      <Row>
        <Col size="md-12">
          <p>{props.id}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default YelpCard;
