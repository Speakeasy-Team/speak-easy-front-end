import React from "react";
import { map } from "lodash";
import CSSModules from "react-css-modules";
import styles from "../styles/components/errors.css";

class Errors extends React.Component {
  render () {
    const { errors } = this.props;

    return (
      <ul styleName="errors-list">
        {map(errors, (error, index) => {
          return <li key={index} styleName="error">{error}</li>;
        })}
      </ul>
    )
  }
}

export default CSSModules(Errors, styles);
