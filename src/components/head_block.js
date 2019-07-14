import React from 'react';
import Parallax from 'parallax-js';
import ReactVivus from 'react-vivus';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let toTopThisScroll = (e) => {
  let toTopposition = document.getElementById(e.target.getAttribute('toelement')).offsetTop;
  document.getElementById('root').scrollTo({top: toTopposition, behavior: 'smooth'});
}

let parseMenu = (dataMenu, m) => {
  if(m){
    const menuBtn = dataMenu.map((comp, key) => <div key={key} onClick={toTopThisScroll.bind(this)} toelement={comp.toelement} className="menu_btn">{comp.title}</div>);
    return menuBtn
  }else{
    return <div className="menu_btn">Not data found</div>
  }
}

let parseMiniInfo = (arr) => {
  const menuBtn = arr.map((a, key) => <div key={key} className="mini_info">
    <div className="miniInfo_image">
      <img src={a.icon} alt=""/>
    </div>
    <div className="miniInfo_data">
      <div className="miniInfo_title">{a.title}</div>
      <div className="miniInfo_text">{a.text}</div>
    </div>
  </div>);
  return menuBtn
}

class HeadBlock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bigLogo: false
    }
  }

  render() {
    return <div className="block head" id="HeadBlock">

      <div className="staticMenuHead">{parseMenu(this.props.menu, true)}</div>

      <div className="background_block">
        <div className={(this.props.bigMainLogo)?"mainLogo":"mainLogo hide"}>
          <ReactVivus
            id="Erevan_mainLogo"
            option={{
              file: this.props.logotype,
              duration: 200,
              animTimingFunction: 'EASE',
              type: 'oneByOne',
              onReady: console.log
            }}
          />
        </div>
        <div className={(this.props.bigMainLogo)?"miniInfoBlock show":"miniInfoBlock"}>
          {parseMiniInfo(this.props.data.miniInfo)}
        </div>

        <div className={(this.props.bigMainLogo)?"headerFood bgImg_1 show":"headerFood bgImg_1"}>
          <img src={this.props.data.background_1} alt="Єреван"/>
          <div className="headFoodLink">Оджахурі на кеци</div>
        </div>
      </div>

      <div className="blockToScroll"></div>

      <div className={(this.props.top > 0)?"bottomBorder isScrolled":"bottomBorder"}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 1440 129" style={{enableBackground:"new 0 0 1440 129"}}>
           <path fill="#E9E9E9" d="M293.5,78c-131.4,32.4-251.3,33-359.7,1.7v154.1h1544v-177C1438.6,62,1398.3,68.9,1357,78
        	C980.9,160.6,956.5-85.5,293.5,78z"/>
        </svg>
      </div>

    </div>
  }
}

export default HeadBlock;