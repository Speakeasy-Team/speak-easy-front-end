import React from "react";
import CSSModules from "react-css-modules";
import { connect } from "react-redux";
import _ from "lodash";
import styles from "../styles/containers/speak-easy.css";
import { loadSpeakEasies, tapSpeakEasy } from "../actions/speakEasy";
import SpeakEasyListItem from "../components/SpeakEasyListItem";
import AddSpeakEasyButton from "../components/AddSpeakEasyButton";

class Location extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(loadSpeakEasies());
  }

  handleSpeakEasyTap(speakEasyId) {
    const { dispatch } = this.props;

    dispatch(tapSpeakEasy(speakEasyId));
  }

  renderSpeakEasies() {
    const { speakEasies, activeId } = this.props;
    return (
      _.map(speakEasies, (speakEasy) => {
        return <SpeakEasyListItem
          key={speakEasy.id}
          speakEasy={speakEasy}
          active={speakEasy.id === activeId}
          onClick={this.handleSpeakEasyTap.bind(this)}
        />;
      })
    );
  }

  renderAddNewButtom() {
    return (
      <AddSpeakEasyButton />
    );
  }

  render() {
    return (
      <div styleName="container">
        <h1 styleName="header">Speak Easies</h1>
        {this.renderSpeakEasies()}
        {this.renderAddNewButtom()}
      </div>
    );
  }
}

const select = (state) => {
  return {
    speakEasies: state.entities.location || {},
    activeId: state.speakEasies.activeId
  }
};

export default connect(select)(CSSModules(Location, styles));
