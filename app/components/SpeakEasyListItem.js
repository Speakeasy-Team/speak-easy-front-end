import React from "react";
import CSSModules from "react-css-modules";
import styles from "../styles/components/speak-easy-list-item.css";
import Collapse from "react-collapse";
import { Link } from "react-router";

class LocationListItem extends React.Component {
  handleClick(e) {
    const { onClick, speakEasy: { id } } = this.props;

    onClick(id);
  }

  render() {
    const {
      id,
      speakEasy: { name, description, coverImageUrl },
      active
    } = this.props

    return (
      <div styleName="container" onClick={this.handleClick.bind(this)}>
        <div styleName="inner-container">
          <h1>{name}</h1>
          <p>{description}</p>
          <Collapse
            isOpened={active}
            springConfig={{stiffness: 100, damping: 15, precision: 70}}
          >
            <img styleName="image" src={coverImageUrl} />
            <Link to={`/speakeasies/${id}/edit`}>Edit</Link>
          </Collapse>
        </div>
      </div>
    );
  }
};

export default CSSModules(LocationListItem, styles);
