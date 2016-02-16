import React from "React";
import CSSModules from "react-css-modules";
import styles from "../styles/components/hamburger.css"

class Hamburger extends React.Component {
  handleClick() {
    const { onClick } = this.props;
    onClick();
  }

  render () {
    return (
      <a styleName="hamburger" onClick={this.handleClick.bind(this)}>
        &#9776;
      </a>
    );
  }
}

export default CSSModules(Hamburger, styles);
