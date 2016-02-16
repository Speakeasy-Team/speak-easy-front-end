import React from "react";
import CSSModules from "react-css-modules";
import styles from "../styles/components/hamburger.css"

class Hamburger extends React.Component {
  handleClick() {
    const { onClick } = this.props;
    onClick();
  }

  render () {
    let style = this.props.active ? "active-hamburger" : "hamburger";

    return (
      <a styleName={style} onClick={this.handleClick.bind(this)}>
        &#9776;
      </a>
    );
  }
}

export default CSSModules(Hamburger, styles);
