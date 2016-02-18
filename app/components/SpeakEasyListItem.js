import React from "react";
import CSSModules from "react-css-modules";
import styles from "../styles/components/speak-easy-list-item.css";

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
    const { name, description } = this.props.speakEasy

    return (
      <div styleName="container" onClick={this.handleClick.bind(this)}>
        <div styleName="inner-container">
          <h1>{name}</h1>
          {this.moreInfo()}
          <p>{description}</p>
        </div>
      </div>
    );
  }
};

export default CSSModules(LocationListItem, styles);
