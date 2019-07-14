import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from './includes/title.js';
class StatisticBlock extends React.Component {
  render() {
    return <div className="block statistic" id="StatisticBlock">
      <div className="statisticBackground">
        <div className="videoTexture"></div>
        <video autoPlay muted loop>
          <source src={this.props.data.backgroundVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  }
}

export default StatisticBlock;
