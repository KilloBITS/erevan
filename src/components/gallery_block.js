import React from 'react';
import Title from './includes/title.js';

class GalleryBlock extends React.Component {
  render() {
    return <div className="block gallery" id="GalleryBlock">
      <Title title={this.props.data.title} subtitle={this.props.data.subTitle} color="#e9e9e9" subcolor="rgba(232, 232, 232, 0.1)"/>
    </div>
  }
}

export default GalleryBlock;
