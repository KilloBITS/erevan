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
      <div className="statisticContent">
        <div className="statisticBlockGlobalData">
          <div className="statisticBlockData">
            <div className="statisticImage">
              <img src={this.props.data.icon1} alt=""/>
            </div>
            <div className="statisticTitle">Різноманітних</div>
            <div className="statisticTitle2">страв у меню</div>
            <div className="statisticLength">200+</div>
          </div>

          <div className="statisticBlockData">
            <div className="statisticImage">
              <img src={this.props.data.icon2} alt=""/>
            </div>
            <div className="statisticTitle">Щасливих клієнтів</div>
            <div className="statisticTitle2">Що відвідують нас кожен день</div>
            <div className="statisticLength">170+</div>
          </div>

          <div className="statisticBlockData">
            <div className="statisticImage">
              <img src={this.props.data.icon3} alt=""/>
            </div>
            <div className="statisticTitle">Замовлень</div>
            <div className="statisticTitle2">банкетів та свят</div>
            <div className="statisticLength">100+</div>
          </div>

          <div className="statisticBlockData">
            <div className="statisticImage">
              <img src={this.props.data.icon4} alt=""/>
            </div>
            <div className="statisticTitle">Працівників</div>
            <div className="statisticTitle2">Що дбають про вас</div>
            <div className="statisticLength">30+</div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default StatisticBlock;
