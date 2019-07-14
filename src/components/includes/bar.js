import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Bar extends React.Component {
  render() {
    return <div className="bar" id="NavigationBar">
      <div className={(this.props.open)?"openMenuButton open":"openMenuButton"} id="openMenuButton">
        <div className="menuButtonLine line1"></div>
        <div className="menuButtonLine line2"></div>
        <div className="menuButtonLine line3"></div>
      </div>
      <div className="socials">
        <div className="socialBtn">
          <a target="_blank" href={this.props.socials.instagram} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        </div>
        <div className="socialBtn">
          <a target="_blank" href={this.props.socials.facebook} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
        </div>

      </div>
    </div>
  }
}

export default Bar;
