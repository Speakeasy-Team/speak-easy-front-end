import React from "react";
import CSSModules from "react-css-modules";
import styles from "../styles/components/speak-easy-form.css";
import { reduxForm } from "redux-form";
import { postSpeakEasy } from "../actions/speakEasy";
import { getValues } from 'redux-form';

class SpeakEasyForm extends React.Component {
  handleSubmission(e) {
    e.preventDefault();
    const { dispatch, values } = this.props;
    dispatch(postSpeakEasy(values));
  }

  render() {
    const {
      fields:
        {
          name,
          description,
          cover_image_url,
          latitude,
          longitude
        }
    } = this.props;

    return (
      <form styleName="container" onSubmit={this.handleSubmission.bind(this)}>
        <div styleName="inner-container">
          <h1 styleName="header">New Speak Easy</h1>

          <label name="name">
            Name
            <input
              styleName="input"
              type="text"
              {...name}
            />
          </label>

          <label name="description">
            Description
            <textarea
              styleName="input"
              {...description}
            />
          </label>

          <label name="cover_image_url">
            Cover Image Url
            <input
              styleName="input"
              type="text"
              {...cover_image_url}
            />
          </label>

          <label name="latitude">
            Latitude
            <input
              styleName="input"
              type="text"
              {...latitude}
            />
          </label>

          <label name="longitude">
            Longitude
            <input
              styleName="input"
              type="text"
              {...longitude}
            />
          </label>

          <input type="submit" value="Create" styleName="submit" />
        </div>
      </form>
    )
  }
}

const wrappedForm = CSSModules(SpeakEasyForm, styles);

export default reduxForm({
  form: "speakEasyNew",
  fields: [
    "name",
    "description",
    "cover_image_url",
    "latitude",
    "longitude",
  ]
})(wrappedForm)
