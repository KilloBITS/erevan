import React from 'react';
import Title from './includes/title.js';

let parseStaff = (dataStaff) => {
    const staff = dataStaff.map((comp, key) => <div key={key} className="blockOfStaff">
      <div className="staffTitle">{comp.name}</div>
      <div className="staffPosition">{comp.position}</div>
      <img src={comp.photo} alt={comp.name}/>
    </div>);
    return staff
}

class StaffBlock extends React.Component {
  render() {
    return <div className="block staff" id="StaffBlock">
      <Title title={this.props.data.title} subtitle={this.props.data.subTitle} color="#e9e9e9" subcolor="rgba(232, 232, 232, 0.1)"/>
      <div className="slogan">
        {this.props.data.slogan}
      </div>
      <div className="staffContent">
        {parseStaff(this.props.data.personal)}
      </div>
    </div>
  }
}

export default StaffBlock;
