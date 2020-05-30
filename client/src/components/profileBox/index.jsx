import React, { Component } from "react";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Title } from "../Styled";
import "./style.css";

class profileBox extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/");
  };



  render() {
    return (

      <div className="media">
        <img src="https://via.placeholder.com/100" className="align-self-center mr-3" alt="..." />
        <div className="media-body">
          <Title className="mt-0">Welcome Back {this.props.name}!</Title>
          {/* <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p> */}
          {/* { LogOut Code } */}
          {/* <button
              onClick={this.onLogoutClick}
              className="btn btn-large btn-secondary logout"
            >
              Logout
        </button> */}
        </div>
      </div>

    );
  }
}

// LogOut code
profileBox.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(profileBox);



