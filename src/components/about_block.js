import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from './includes/title.js';
class AboutBlock extends React.Component {
  render() {
    return <div className="block about" id="AboutBlock">
      <Title foodIcon={this.props.foodIcon} title={this.props.data.title} subtitle={this.props.data.subTitle} color="black" subcolor="rgba(127, 18, 18, 0.09)"/>
      <div className="slogan">
        {this.props.data.slogan}
      </div>
      <div className="aboutContentBlock">
        {this.props.data.aboutText}
      </div>
    </div>
  }
}

export default AboutBlock;
