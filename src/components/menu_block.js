import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MenuBlock extends React.Component {
  render() {
    return <div className="block menu" id="MenuBlock">
      <div className={(this.props.top >= this.props.menuBlockTop)?"topBorder isScrolled":"topBorder"}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 1440 129" style={{enableBackground:"new 0 0 1440 129"}}>
           <path fill="#E9E9E9" d="M293.5,78c-131.4,32.4-251.3,33-359.7,1.7v154.1h1544v-177C1438.6,62,1398.3,68.9,1357,78
          C980.9,160.6,956.5-85.5,293.5,78z"/>
        </svg>
      </div>
    </div>
  }
}

export default MenuBlock;
