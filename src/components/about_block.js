import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from './includes/title.js';
import Fade from 'react-reveal/Fade';

class AboutBlock extends React.Component {
  render() {
    return <div className="block about" id="AboutBlock">
      <Title foodIcon={this.props.foodIcon} title={this.props.data.title} subtitle={this.props.data.subTitle} color="black" subcolor="rgba(127, 18, 18, 0.09)"/>
      <Fade delay={50}>
      <div className="slogan">
        {this.props.data.slogan}
      </div>
      </Fade>
      <Fade delay={50}>
      <div className="aboutContentBlock">
        {this.props.data.aboutText}
      </div>
      <div className="otherAboutInfo">
        <div className="otherAboutInfoBlock">
          <div className="otherAboutInfoBlockIcon">
            <img src={this.props.data.miniData[0].icon} alt=""/>
          </div>
          <div className="otherAboutInfoBlockTitle">
            {this.props.data.miniData[0].title}
          </div>
          <div className="otherAboutInfoBlockData">
            {this.props.data.miniData[0].text}
          </div>
        </div>
        <div className="otherAboutInfoBlock">
          <div className="otherAboutInfoBlockIcon">
            <img src={this.props.data.miniData[1].icon} alt=""/>
          </div>
          <div className="otherAboutInfoBlockTitle">
            {this.props.data.miniData[1].title}
          </div>
          <div className="otherAboutInfoBlockData">
            {this.props.data.miniData[1].text}
          </div>
        </div>
        <div className="otherAboutInfoBlock">
          <div className="otherAboutInfoBlockIcon">
            <img src={this.props.data.miniData[2].icon} alt=""/>
          </div>
          <div className="otherAboutInfoBlockTitle">
            {this.props.data.miniData[2].title}
          </div>
          <div className="otherAboutInfoBlockData">
            {this.props.data.miniData[2].text}
          </div>
        </div>
      </div>
      </Fade>
      <div className="aboutSocialsBlock">
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

export default AboutBlock;
