import React from 'react';
import Swiper from 'react-id-swiper';
import Title from './includes/title.js';

let parseStaff = (dataStaff) => {
    const staff = dataStaff.map((comp, key) => <div key={key} className="blockOfStaff">
      <div className="staffTitle">{comp.name}</div>
      <div className="staffPosition">{comp.position}</div>
      <img src={comp.photo} alt={comp.name}/>
    </div>);
    return staff
}

const multipleRowSlidesLayoutMobile = (newsData) => {
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
  return (
    <Swiper {...params}>
      {parseStaff(newsData)}
    </Swiper>
  )
};

class StaffBlock extends React.Component {
  render() {
    return <div className="block staff" id="StaffBlock">
      <Title title={this.props.data.title} subtitle={this.props.data.subTitle} color="#e9e9e9" subcolor="rgba(232, 232, 232, 0.1)"/>
      <div className="slogan">
        {this.props.data.slogan}
      </div>
      <div className="staffContent">
        {(document.body.clientWidth > 916)?parseStaff(this.props.data.personal):multipleRowSlidesLayoutMobile(this.props.data.personal)}
      </div>
      <ul className="circles">
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
       </ul>
    </div>
  }
}

export default StaffBlock;
