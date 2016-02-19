import React from "react";
import CSSModules from "react-css-modules";
import styles from "../styles/components/speak-easy-list-item.css";
import Collapse from "react-collapse";
import {presets} from 'react-motion';

class LocationListItem extends React.Component {
  handleClick(e) {
    const { onClick, speakEasy: { id } } = this.props;

    onClick(id);
  }

  moreInfo() {
    const { active, speakEasy: { cover_image_url } } = this.props;

    if (active)  {
      return <img styleName="image" src={cover_image_url} />
    }
  }

  render() {
    const {
      speakEasy: { name, description, cover_image_url },
      active
    } = this.props

    return (
      <div styleName="container" onClick={this.handleClick.bind(this)}>
        <div styleName="inner-container">
          <h1>{name}</h1>
          <Collapse
            isOpened={active}
            springConfig={{stiffness: 100, damping: 15, precision: 70}}
          >
            <img styleName="image" src={cover_image_url} />
          </Collapse>
          <p>{description}</p>
        </div>
      </div>
    );
  }
};

export default CSSModules(LocationListItem, styles);
