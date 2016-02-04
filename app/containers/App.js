import React from "react";
import styles from "../styles/containers/app.css";
import CSSModules from "react-css-modules";

class App extends React.Component {
  render () {
    return (
      <div styleName="app">
        Hello, World
      </div>
    );
  };
}

export default CSSModules(App, styles);
