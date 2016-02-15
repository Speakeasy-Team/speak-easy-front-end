import React from "React";
import CSSModules from "react-css-modules";
import styles from "../styles/components/nav.css"

class Nav extends React.Component {
  render () {
    return (
      <ul styleName="nav">
        <li styleName="nav-list-item">
          <a>Hello</a>
        </li>
        <li styleName="nav-list-item">
          <a>World</a>
        </li>
      </ul>
    );
  }
}

export default CSSModules(Nav, styles);
