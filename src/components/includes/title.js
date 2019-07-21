import React from 'react';
import Fade from 'react-reveal/Fade';
import TitleLine from './title_line.js';
class Title extends React.Component {
  render() {
    return <div className="title_block">
      <Fade delay={50}><div className="thisTitle" style={{color: this.props.color}}>{this.props.title}</div></Fade>
      <div className="thisSubTitle" style={{color: this.props.subcolor}}>{this.props.subtitle}</div>
      <TitleLine color={this.props.color}/>
    </div>
  }
}

export default Title;
