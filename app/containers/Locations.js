import React from "react";
import CSSModules from "react-css-modules";
import { connect } from "react-redux";
import styles from "../styles/containers/locations.css";
import { loadSpeakEasies } from "../actions/location";
import LocationListItem from "../components/LocationListItem";

class Location extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(loadSpeakEasies());
  }

  renderSpeakEasies() {
    const { speakEasies } = this.props;

    return (
      speakEasies.map((speakEasy) => {
        return <LocationListItem key={speakEasy.id} speakEasy={speakEasy} />;
      })
    );
  }

  render() {
    return (
      <div styleName="container">
        <h1 styleName="header">Speak Easies</h1>
        {this.renderSpeakEasies()}
      </div>
    );
  }
}

const select = (state) => {
  return {
    speakEasies: state.entities.speakEasies.data || []
  }
};

export default connect(select)(CSSModules(Location, styles));
