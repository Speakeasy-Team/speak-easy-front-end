import React from "react";
import CSSModules from "react-css-modules";
import styles from "../styles/components/location-list-item.css";

class LocationListItem extends React.Component {
  render() {
    const { name, cover_image_url, description } = this.props.speakEasy
    return (
      <div styleName="container">
        <div styleName="inner-container">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    );
  }
};

export default CSSModules(LocationListItem, styles);
