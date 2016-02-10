import React from "react";
import styles from "../styles/containers/SignIn.css"
import CSSModules from "react-css-modules";

class SignIn extends React.Component {
  render () {
    return (
      <form styleName="container">
        <h1 styleName="header">Sign In</h1>

        <div styleName="group">
          <label name="email">Email</label>
          <input type="text" name="email" styleName="input" />
        </div>

        <div styleName="group">
          <label name="password">Password</label>
          <input type="text" name="password" styleName="input" />
        </div>

        <input type="submit" value="Sign in" styleName="submit" />
      </form>
    );
  };
}

export default CSSModules(SignIn, styles);
