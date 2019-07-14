import React from 'react';
import ReactDOM from 'react-dom';
import Pace from 'react-pace-progress'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee , fas} from '@fortawesome/free-solid-svg-icons';

//Styles
import './styles/index.css';
import './styles/index.min.css';
import logotype from './images/logotype.svg';
//import global block
import PreloaderBlock from './components/includes/preloader.js';
import NavigationBarBlock from './components/includes/bar.js';

//import components
import HeadBlock from './components/head_block.js';
import AboutBlock from './components/about_block.js';
import MenuBlock from './components/menu_block.js';
import StatisticBlock from './components/statistic_block.js';

library.add(fab, faCheckSquare, faCoffee, fas);

class Erevan extends React.Component{
  constructor(props){
    const isLocation = (window.location.hostname === 'localhost')? window.location.origin.split('3000')[0]+'5003':window.location.origin;
    super(props)
    this.state = {
      preloader: true,
      loader: isLocation+'/loader.gif',
      foodIcon: isLocation+'/icons/restaurant.svg',
      logotype: logotype,
      openedMenu: false,
      bigMainLogo: false,
      scrollTop: 0,
      socials:{
        instagram:'https://www.instagram.com/erevan_rest/',
        facebook:'https://www.facebook.com/restoran.erevan.lviv/'
      },
      menu: [
        {
          title: 'Головна',
          toelement:'HeadBlock'
        },
        {
          title: 'Про нас',
          toelement:'AboutBlock'
        },
        {
          title: 'Меню закладу',
          toelement:'MenuBlock'
        },
        {
          title: 'Новини',
          toelement:''
        },
        {
          title: 'Галерея',
          toelement:''
        },
        {
          title: 'Бронювання',
          toelement:''
        }
      ],
      headBlock: {
        miniInfo: [
          {
            icon:isLocation+'/icons/fire.svg',
            title:'Традиційна кухня',
            text:'Поринути в традиційну атмосферу Вірменії, тепер можна неподалік центра Львова'
          },
          {
            icon:isLocation+'/icons/clipboard.svg',
            title:'Гарантія якості',
            text:'Для своїх страв ми викорстовуємо продукти найвищої якості'
          },
          {
            icon:isLocation+'/icons/musical-note.svg',
            title:'Атмосфера в закладі',
            text:'Неповторну атмосферу у закладі створює традиційна вірменська музика'
          }
        ],
        background_1: isLocation+'/bg_el_1.svg',
        background_2: isLocation+'/bg_el_2.png'
      },
      aboutBlock: {
        title:`< ПРО НАС >`,
        subTitle:'про нас',
        slogan:'ЯКЩО ТИ СПРАВЖНІЙ ГУРМАН - ЗАВІТАЙ У ЄРЕВАН !',
        aboutText:`Ресторан вірменської, авторської кухні (долма, хачапурі, сациві, шашлик та лаваш) у супроводі неймовірного вина, зустріне кожного гостя в особливих традиціях чудового Кавказу. Під запальну музику відкриє для Вас незабутню подорож в саме серце Вірменії - Єреван. Запашна зелень, грандіозно-ніжні сири, соковито-яскраві овочі, ідеально-ароматне м'ясо не залишить Вас байдужими. А національні вірменські солодощі будуть до смаку кожному. Дружня, затишна атмосфера, чудова музика, гастрономічне задоволення від вірменської кухні та смачного вина, створять для Вас незабутні враження про мандрівку у Вірменію.
        Також, їжу можна замовити онлайн, через сервіс Glovo.`
      },
      menuBlock: {
        title:'< Наше меню >',
        subTitle:'наше меню',
        slogan: 'Відчуй на смак традиції Вірменії у серці Львова',
        foodsCategory: [
          {
            id: 0,
            title: 'ХОЛОДНІ ЗАКУСКИ',
            description: '',
            background:  isLocation+'/categories/Salo.jpg'
          },
          {
            id: 1,
            title: 'CАЛАТИ',
            description: '',
            background:  isLocation+'/categories/Chahtoni.jpg'
          },
          {
            id: 2,
            title: 'ГАРЯЧІ ЗАКУСКИ',
            description: '',
            background:  isLocation+'/categories/Sachivi.jpg'
          },
          {
            id: 3,
            title: 'ПЕРШІ СТРАВИ',
            description: '',
            background:  isLocation+'/categories/Harcho.jpg'
          },
          {
            id: 4,
            title: 'ДРУГІ СТРАВИ',
            description: '',
            background:  isLocation+'/categories/Odzuhari.jpg'
          },
          {
            id: 5,
            title: 'МАНГАЛ',
            description: '',
            background:  isLocation+'/categories/Lula.jpg'
          },
          {
            id: 6,
            title: 'ДЕСЕРТИ',
            description: '',
            background:  isLocation+'/categories/IceScream.jpg'
          },
          {
            id: 7,
            title: 'ДЛЯ ПІКНІКА',
            description: '',
            background:  isLocation+'/categories/pickeck.jpg'
          }
        ]
      },
      statisticBlock: {
        backgroundVideo: isLocation+'/video/video.webm'
      }
    }
    this.componentScrollFunction = this.componentScrollFunction.bind(this);
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        preloader:false,
        bigMainLogo: true
      });
    },4000);
    document.getElementById('root').addEventListener('scroll', this.componentScrollFunction.bind(this));
  }

  componentScrollFunction(){
    let scrollTop = document.getElementById('root').scrollTop;
    this.setState({
      scrollTop:scrollTop,
      menuBlockTop: document.getElementById('MenuBlock').offsetTop - document.body.offsetHeight + 100
    });
  }

  render(){
    return <div className="content" id="content">
      {this.state.preloader ? <Pace color="#27ae60" height={3}/> : null }
      <PreloaderBlock status={this.state.preloader} loader={this.state.loader} logotype={this.state.logotype}/>
      <NavigationBarBlock openedMenu={this.state.openedMenu} socials={this.state.socials}/>
      <HeadBlock top={this.state.scrollTop} data={this.state.headBlock} menu={this.state.menu} bigMainLogo={this.state.bigMainLogo} logotype={this.state.logotype}/>
      <AboutBlock data={this.state.aboutBlock} foodIcon={this.state.foodIcon}/>
      <MenuBlock data={this.state.menuBlock} top={this.state.scrollTop} menuBlockTop={this.state.menuBlockTop}/>
      <StatisticBlock data={this.state.statisticBlock}/>
    </div>
  }
}

ReactDOM.render(<Erevan/>, document.getElementById('root'));
