import React from "react";
import styles from "../styles/containers/app.css";
import CSSModules from "react-css-modules";

import SignIn from "./SignIn";

class App extends React.Component {
  render () {
    return (
      <div styleName="app">
        <nav styleName="nav">
          <div styleName="right">
            <h1 styleName="header">Easy Speak</h1>
          </div>
        </nav>
        <SignIn />
      </div>
    );
  };
}

export default CSSModules(App, styles);
