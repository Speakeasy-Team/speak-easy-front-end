import React from "react";
import styles from "../styles/containers/root.css";
import CSSModules from "react-css-modules";
import { connect } from "react-redux";
import { toggleHamburger, appLoaded } from "../actions";
import Navigation from "../components/Navigation";
import Hamburger from "../components/Hamburger";

class Root extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(appLoaded());
  }

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

  renderNav() {
    const { hamburgerToggled } = this.props;

    if (hamburgerToggled) { return <Navigation /> }
  }

  render () {
    const { hamburgerToggled } = this.props;

    return (
      <div styleName="app">
        <nav styleName="nav">
          <h1 styleName="header">Easy Speak</h1>
          <Hamburger
            active={hamburgerToggled}
            onClick={this.onHamburgerClick.bind(this)}
          />
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
    hamburgerToggled: state.root.hamburgerToggled || false
  }
};

export default connect(select)(CSSModules(Root, styles));
