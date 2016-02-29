import React from "react";
import SpeakEasyForm from "../components/SpeakEasyForm";
import { connect } from "react-redux";
import { find } from "lodash";

class SpeakEasyFormContainer extends React.Component {
  getInitialValues() {
    const { routeParams: { id }, speakEasies } = this.props;
    const speakEasy = find(speakEasies, (item) => { return item.id == id })
    return speakEasy
  }

  render() {
    const { id } = this.props.routeParams;
    const props = {
      initialValues: (this.getInitialValues() || {}),
      update: !!id,
      id
    };

    return (
      <SpeakEasyForm {...props} />
    )
  }
}

const select = (state) => {
  return {
    speakEasies: state.entities.location || []
  }
}

export default connect(select)(SpeakEasyFormContainer);
