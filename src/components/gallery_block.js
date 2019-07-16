import React from 'react';
import Title from './includes/title.js';
import Gallery from 'react-grid-gallery';

class GalleryBlock extends React.Component {
  render() {
    return <div className="block gallery" id="GalleryBlock">
      <Title title={this.props.data.title} subtitle={this.props.data.subTitle} color="#e9e9e9" subcolor="rgba(232, 232, 232, 0.1)"/>
      <div className="slogan">
        {this.props.data.slogan}
      </div>
      <Gallery
        images={this.props.data.images}
        backdropClosesModal={true}
        imageCountSeparator="/"
      />
      <div className="galleryFooter">
        <div className="defaultButton">Більше фотографій</div>
      </div>
    </div>
  }
}

export default GalleryBlock;
