import React from 'react';
import Length from './includes/length.js';
import Fade from 'react-reveal/Fade';

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
          <Fade delay={50}>
          <div className="statisticBlockData">
            <div className="statisticImage">
              <img src={this.props.data.icon1} alt=""/>
            </div>
            <div className="statisticTitle">Різноманітних</div>
            <div className="statisticTitle2">страв у меню</div>
            <div className="statisticLength">
              <Length number={130} speed={27} symbol="+" id="num0" top={this.props.top}/>
            </div>
          </div>
          </Fade>
          <Fade delay={50}>
          <div className="statisticBlockData">
            <div className="statisticImage">
              <img src={this.props.data.icon2} alt=""/>
            </div>
            <div className="statisticTitle">Щасливих клієнтів</div>
            <div className="statisticTitle2">Що відвідують нас кожен день</div>
            <div className="statisticLength">
              <Length number={170} speed={20} symbol="+" id="num1" top={this.props.top}/>
            </div>
          </div>
          </Fade>
          <Fade delay={50}>
          <div className="statisticBlockData">
            <div className="statisticImage">
              <img src={this.props.data.icon3} alt=""/>
            </div>
            <div className="statisticTitle">Замовлень</div>
            <div className="statisticTitle2">банкетів та свят</div>
            <div className="statisticLength">
              <Length number={100} speed={30} symbol="+" id="num2" top={this.props.top}/>
            </div>
          </div>
          </Fade>
          <Fade delay={50}>
          <div className="statisticBlockData">
            <div className="statisticImage">
              <img src={this.props.data.icon4} alt=""/>
            </div>
            <div className="statisticTitle">Працівників</div>
            <div className="statisticTitle2">Що дбають про вас</div>
            <div className="statisticLength">
              <Length number={30} speed={100} symbol="+" id="num3" top={this.props.top}/>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  }
}

export default StatisticBlock;
