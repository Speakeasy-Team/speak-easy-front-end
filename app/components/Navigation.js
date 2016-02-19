import React from "react";
import CSSModules from "react-css-modules";
import styles from "../styles/components/nav.css";
import { Link } from "react-router";

class Navigation extends React.Component {
  render () {
    return (
      <ul styleName="nav">
        <li styleName="nav-list-item">
          <Link styleName="link" to={"/speakeasies"}>Speak Easies</Link>
        </li>
      </ul>
    );
  }
}

export default CSSModules(Navigation, styles);
