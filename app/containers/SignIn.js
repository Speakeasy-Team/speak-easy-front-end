import React from "react";
import CSSModules from "react-css-modules";
import styles from "../styles/containers/sign-in.css";
import { authorize } from "../actions/authorization";
import { reduxForm } from "redux-form";
import Errors from "../components/Errors";

class SignIn extends React.Component {
  handleSubmission(e) {
    e.preventDefault();
    const {
      dispatch,
      fields: { email, password }
    } = this.props;
    dispatch(authorize(email.value, password.value));
  }

  render () {
    const {
      fields: {email, password},
      handleSubmit,
      error
    } = this.props;

    return (
      <form styleName="container" onSubmit={handleSubmit(authorize)}>

        <div styleName="inner-container">
          <h1 styleName="header">Sign In</h1>
          <Errors errors={error} />

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
        </div>
      </form>
    );
  };
}

const wrappedSignIn = CSSModules(SignIn, styles);

export default reduxForm({
  form: "signIn",
  fields: ["email", "password"]
})(wrappedSignIn)
