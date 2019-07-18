import React from 'react';
import ReactVivus from 'react-vivus';

let toTopThisScroll = (e) => {
  console.log(e);
  let toTopposition = document.getElementById(e.target.getAttribute('toelement')).offsetTop;
  document.getElementById('root').scrollTo({top: toTopposition, behavior: 'smooth'});
}

let fullNavigationParseMenu = (dataMenu) => {
    const menuBtn = dataMenu.map((comp, key) => <div key={key} onClick={toTopThisScroll.bind(this)} toelement={comp.toelement} className="fullNavMenuBtn">{comp.title}</div>);
    return menuBtn
}

class FullNavigation extends React.Component {
  render() {
    return <div className={(this.props.open)?"full_nav open":"full_nav"} id="FullNavigation">
      <div className="fullNavBackBlock"></div>
      <div className="fullNavContentBlock" onClick={ this.props.openedFullNav.bind(this)}>
        {fullNavigationParseMenu(this.props.menu)}
      </div>
      <div className="fullNavSocials">

      </div>
    </div>
  }
}

export default FullNavigation;
