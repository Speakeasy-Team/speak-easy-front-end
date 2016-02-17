import React from "react";
import CSSModules from "react-css-modules";
import styles from "../styles/containers/sign_in.css";
import { changeEmail, changePassword, authorize } from "../actions";
import { reduxForm } from "redux-form";

class SignIn extends React.Component {
  handleSubmission(e) {
    e.preventDefault();
    const { dispatch, fields: { email, password } } = this.props;
    dispatch(authorize(email.value, password.value));
  }

  render () {
    const {fields: {email, password}} = this.props;

    return (
      <form styleName="container" onSubmit={this.handleSubmission.bind(this)}>
        <h1 styleName="header">Sign In</h1>

        <label name="email">
          Email
          <input
            type="text"
            styleName="input"
            {...email}
          />
        </label>

        <label name="password">
          Password
          <input
            type="password"
            styleName="input"
            {...password}
          />
        </label>

        <input type="submit" value="Sign in" styleName="submit" />
      </form>
    );
  };
}

const wrappedSignIn = CSSModules(SignIn, styles);

export default reduxForm({
  form: "signIn",
  fields: ["email", "password"]
})(wrappedSignIn)
