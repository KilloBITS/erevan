import React from 'react';
import Swiper from 'react-id-swiper';
import Title from './includes/title.js';
import Fade from 'react-reveal/Fade';

let parseNews = (data) => {
  const dataBlock = data.map((comp, key) => <div key={key} className="newsthisBlock">
    <div className="newsData">
      {(comp.dataType === 'image')?<img src={comp.dataUrl} alt=""/>:null}
    </div>
    <div className="newsTitle">
      {comp.title}
    </div>
    <div className="newsText">
      {comp.text}
    </div>
    <div className="newsDate">
      {comp.date}
    </div>
  </div>);
  return dataBlock
}

const multipleRowSlidesLayoutMobile = (newsData) => {
  const params = {
    slidesPerView: (document.body.clientWidth > 800)?3:1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }
  return (
    <Fade delay={50}>
      <Swiper {...params}>
        {parseNews(newsData)}
      </Swiper>
    </Fade>
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
