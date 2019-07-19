import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Bar extends React.Component {
  toTopPosition(){
    document.getElementById('root').scrollTo({top: 0, behavior: 'smooth'});
  }
  render() {
    return <div className="bar" id="NavigationBar">

      <div className={(this.props.top > 800)?(this.props.open)?"openMenuButton open":"openMenuButton":"openMenuButton hide"} id="openMenuButton" onClick={this.props.openedFullNav}>
        <div className="menuButtonLine line1"></div>
        <div className="menuButtonLine line2"></div>
        <div className="menuButtonLine line3"></div>
      </div>
      <div className="socials">
        <div className="socialBtn one">
          <a target="_blank" href={this.props.socials.instagram} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        </div>
        <div className="socialBtn two">
          <a target="_blank" href={this.props.socials.facebook} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
        </div>
      </div>

      <div className={(this.props.top > 800)?"navigatorBtn socialsBtn":"navigatorBtn socialsBtn hide"}>
        <FontAwesomeIcon icon={['fas', 'align-center']}/>
      </div>
      <div className={(this.props.top > 800)?"navigatorBtn totop":"navigatorBtn totop hide"} onClick={this.toTopPosition.bind(this)}>
        <FontAwesomeIcon icon={['fas', 'arrow-up']}/>
      </div>
    </div>
  }
}

export default Bar;
