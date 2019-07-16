import React from 'react';
import Title from './includes/title.js';
import FullMenu from './includes/full_menu.js';
let parseMenuBlocs = (arr) => {
  const menu = arr.map((a, key) => <div key={key} className="toZoomImageBlock menuCategoryBlock">
    <div className="foodLength">{a.description}</div>
    <div className="backgroundFitBlock">
      <img src={a.background} alt={a.title} className="backgroundFoodsImage"/>
    </div>
    <div className="menuFoodsTitle">{a.title}</div>
  </div>);
  return menu
}

class MenuBlock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      openfullMenu: false
    }
  }

  openFullMenuBlock(){
    this.setState({
      openfullMenu: true
    });
  }
  render() {
    return <div className="block menu" id="MenuBlock">
      <FullMenu open={this.state.openfullMenu} menuimages={this.props.data.menuimages}/>
      <div className={(this.props.top >= this.props.menuBlockTop)?"topBorder isScrolled":"topBorder"}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 1440 129" style={{enableBackground:"new 0 0 1440 129"}}>
           <path fill="#E9E9E9" d="M293.5,78c-131.4,32.4-251.3,33-359.7,1.7v154.1h1544v-177C1438.6,62,1398.3,68.9,1357,78
          C980.9,160.6,956.5-85.5,293.5,78z"/>
        </svg>
      </div>
      <Title title={this.props.data.title} subtitle={this.props.data.subTitle} color="#e9e9e9" subcolor="rgba(232, 232, 232, 0.1)"/>
      <div className="slogan">
        {this.props.data.slogan}
      </div>
      <div className="menuContentBlock">
        {parseMenuBlocs(this.props.data.foodsCategory)}
      </div>
      <div className="defaultButton" onClick={this.openFullMenuBlock.bind(this)}>
        Переглянути повне меню
      </div>
    </div>
  }
}

export default MenuBlock;
