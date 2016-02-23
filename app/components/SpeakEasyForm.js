import React from "react";
import CSSModules from "react-css-modules";
import styles from "../styles/components/speak-easy-form.css";
import { reduxForm } from "redux-form";
import { postSpeakEasy, updateSpeakEasy } from "../actions/speakEasy";
import { getValues } from 'redux-form';

class SpeakEasyForm extends React.Component {
  handleSubmission(e) {
    e.preventDefault();
    const {
      id,
      dispatch,
      values,
      update,
    } = this.props;

    if (update) {
      dispatch(updateSpeakEasy(id, values));
    } else {
      dispatch(postSpeakEasy(values));
    }
  }

  render() {
    const {
      update,
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
          <h1>{update ? `Edit ${name.defaultValue}` : "Create Speak Easy"}</h1>

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

          <input type="submit" value={update ? "Update" : "Create"} styleName="submit" />
        </div>
      </form>
    )
  }
}

const wrappedForm = CSSModules(SpeakEasyForm, styles);

export default reduxForm({
  form: "speakEasy",
  fields: [
    "name",
    "description",
    "cover_image_url",
    "latitude",
    "longitude",
  ]
})(wrappedForm)
