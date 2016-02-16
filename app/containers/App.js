import React from "react";
import styles from "../styles/containers/app.css";
import CSSModules from "react-css-modules";
import { connect } from "react-redux";
import { toggleHamburger } from "../actions";
import Nav from "../components/Nav";
import SignIn from "./SignIn";
import Hamburger from "../components/Hamburger";

class App extends React.Component {
  handleClick() {
    const { dispatch, hamburgerToggled } = this.props;

    if (hamburgerToggled) {
      dispatch(toggleHamburger());
    }
  }

  onHamburgerClick() {
    const { dispatch } = this.props;

    dispatch(toggleHamburger());
  }

  renderHamburger() {
    const { hamburgerToggled } = this.props;

    return <Hamburger onClick={this.onHamburgerClick.bind(this)} />
  }

  renderNav() {
    const { hamburgerToggled } = this.props;

    if (hamburgerToggled) { return <Nav /> }
  }

  render () {
    return (
      <div styleName="app">
        <nav styleName="nav">
          <h1 styleName="header">Easy Speak</h1>
          {this.renderHamburger()}
        </nav>
        {this.renderNav()}
        <div onClick={this.handleClick.bind(this)}>
          {this.props.children}
        </div>
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
