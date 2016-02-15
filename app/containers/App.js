import React from "react";
import styles from "../styles/containers/app.css";
import CSSModules from "react-css-modules";
import toggleHamburger from "../actions";
import { connect } from "react-redux";

import SignIn from "./SignIn";

class App extends React.Component {
  onHamburgerClick() {
    const { dispatch } = this.props;

    dispatch({type: "TOGGLE_HAMBURGER"});
  };

  renderHamburger() {
    const { hamburgerToggled } = this.props
    if (hamburgerToggled) {
      return (
        <a styleName="hamburger"
          onClick={this.onHamburgerClick.bind(this)}>
          Clicked
        </a>
      );
    } else {
      return (
        <a styleName="hamburger"
          onClick={this.onHamburgerClick.bind(this)}>
          &#9776;
        </a>
      );
    }
  }

  render () {
    return (
      <div styleName="app">
        <nav styleName="nav">
          <h1 styleName="header">Easy Speak</h1>
          {this.renderHamburger()}
        </nav>
        {this.props.children}
      </div>
    );
  };
}

const select = (state) => {
  return {
    hamburgerToggled: state.hamburgerToggled || false
  }
}

export default connect(select)(CSSModules(App, styles));
