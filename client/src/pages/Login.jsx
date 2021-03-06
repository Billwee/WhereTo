import React, { Component } from "react";
import {Wrapper} from "../components/Styled";
import {Row} from "../components/Grid";
import SignOn from "../components/SignOn";

class Login extends Component {

  render() {
    return (
      <Wrapper>
        <Row>
          <img className="logo" src={process.env.PUBLIC_URL + '/WhereToLogo.png'} alt="logo" />
        </Row>
        <SignOn />
      </Wrapper>
    );
  }
}

export default Login;
