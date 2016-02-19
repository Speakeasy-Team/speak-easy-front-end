import React from "react";
import CSSModules from "react-css-modules";
import styles from "../styles/components/add-speak-easy-button.css";

class AddSpeakEasyButton extends React.Component {
  render() {
    return (
      <a href="/speakeasies/new">
        <button styleName="button">Add Speak Easy</button>
      </a>
    )
  }
}

export default CSSModules(AddSpeakEasyButton, styles);
