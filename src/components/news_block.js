import React from 'react';
import Swiper from 'react-id-swiper';
import Title from './includes/title.js';


let parseNews = (data) => {
  const dataBlock = data.map((comp, key) => <div key={key} className="newsthisBlock">
    <div className="newsImage"></div>
    <div className="newsTitle"></div>
    <div className="newsText"></div>
    <div className="newsDate"></div>
  </div>);
  return dataBlock
}

const multipleRowSlidesLayoutMobile = (newsData) => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }
  return (
    <Swiper {...params}>
      {parseNews(newsData)}
    </Swiper>
  )
};

class NewsBlock extends React.Component {
  render() {
    return <div className="block news" id="NewsBlock">
      <Title title={this.props.data.title} subtitle={this.props.data.subTitle} color="#e9e9e9" subcolor="rgba(232, 232, 232, 0.1)"/>
      <div className="slogan">
        {this.props.data.slogan}
      </div>
      {multipleRowSlidesLayoutMobile(this.props.data.newsArray)}
    </div>
  }
}

export default NewsBlock;
