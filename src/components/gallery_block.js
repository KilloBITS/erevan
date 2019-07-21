import React from 'react';
import Title from './includes/title.js';
import Gallery from 'react-grid-gallery';
import Fade from 'react-reveal/Fade';

class GalleryBlock extends React.Component {
  render() {
    return <div className="block gallery" id="GalleryBlock">
      <Title title={this.props.data.title} subtitle={this.props.data.subTitle} color="#e9e9e9" subcolor="rgba(232, 232, 232, 0.1)"/>
      <div className="slogan">
        {this.props.data.slogan}
      </div>
      <Fade>
      <Gallery
        images={this.props.data.images}
        backdropClosesModal={true}
        imageCountSeparator="/"
        margin={1}
      />
      </Fade>
      <div className="galleryFooter">
        <div className="defaultButton">Більше фотографій</div>
      </div>
    </div>
  }
}

export default GalleryBlock;
