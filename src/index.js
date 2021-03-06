import React from 'react';
import ReactDOM from 'react-dom';
import Pace from 'react-pace-progress'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee , fas} from '@fortawesome/free-solid-svg-icons';

//Styles
import './styles/swiper.css';
import './styles/index.css';
import './styles/index.min.css';
import logotype from './images/logotype.svg';
//import global block
import PreloaderBlock from './components/includes/preloader.js';
import NavigationBarBlock from './components/includes/bar.js';
import FullNavigation from './components/includes/full_navigation.js';
import FullMenu from './components/includes/full_menu.js';
import SignIn from './components/includes/signin.js'
//import components
import HeadBlock from './components/head_block.js';
import AboutBlock from './components/about_block.js';
import MenuBlock from './components/menu_block.js';
import StatisticBlock from './components/statistic_block.js';
import NewsBlock from './components/news_block.js';
import GalleryBlock from './components/gallery_block.js';
import BookNowBlock from './components/booknow_block.js';
import MapBlock from './components/map_block.js'
import StaffBlock from './components/staff_block.js'
import FooterBlock from './components/footer_block.js'
import AuthorBlock from './components/author_block.js'
library.add(fab, faCheckSquare, faCoffee, fas);

class Erevan extends React.Component{
  constructor(props){
    const isLocation = (window.location.hostname === 'localhost')? (window.location.port === "3000")? window.location.origin.split('3000')[0]+'5003':window.location.origin:window.location.origin;
    super(props)
    this.state = {
      openfullMenu: false,
      openedSignIn: false,
      openBarSocials: false,
      fullnav: false,
      preloader: true,
      loader: isLocation+'/loader.gif',
      foodIcon: isLocation+'/icons/restaurant.svg',
      logotype: logotype,
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
          toelement:'NewsBlock'
        },
        {
          title: 'Галерея',
          toelement:'GalleryBlock'
        },
        {
          title: 'Бронювання',
          toelement:'BookNowBlock'
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
        background_2: isLocation+'/bg_el_2.svg',
        fork: isLocation + '/fork.svg',
        knife: isLocation + '/knife.svg'
      },
      aboutBlock: {
        title:`< ПРО НАС >`,
        subTitle:'про нас',
        slogan:'ЯКЩО ТИ СПРАВЖНІЙ ГУРМАН - ЗАВІТАЙ У ЄРЕВАН !',
        aboutText:`Ресторан вірменської, авторської кухні (долма, хачапурі, сациві, шашлик та лаваш) у супроводі неймовірного вина, зустріне кожного гостя в особливих традиціях чудового Кавказу. Під запальну музику відкриє для Вас незабутню подорож в саме серце Вірменії - Єреван. Запашна зелень, грандіозно-ніжні сири, соковито-яскраві овочі, ідеально-ароматне м'ясо не залишить Вас байдужими. А національні вірменські солодощі будуть до смаку кожному. Дружня, затишна атмосфера, чудова музика, гастрономічне задоволення від вірменської кухні та смачного вина, створять для Вас незабутні враження про мандрівку у Вірменію.
        Також, їжу можна замовити онлайн, через сервіс Glovo.`,
        miniData: [
          {
            title:'Є побажання?',
            text:`restoran.erevan@gmail.com`,
            icon: isLocation+'/icons/dialog.svg'
          },
          {
            title:'Адреса',
            text:`м.Львів,
            вул.Митрополита Андрея 8`,
            icon: isLocation+'/icons/location.svg'
          },
          {
            title:'Телефон',
            text:`+38 (032) 237 77 21
            +38 (098) 174 24 00`,
            icon: isLocation+'/icons/smartphone.svg'
          }
        ]
      },
      menuBlock: {
        title:'< МЕНЮ ЗАКЛАДУ >',
        subTitle:'МЕНЮ ЗАКЛАДУ',
        slogan: 'Відчуй на смак традиції Вірменії у серці Львова',
        foodsCategory: [
          {
            id: 0,
            title: 'ХОЛОДНІ ЗАКУСКИ',
            description: '3',
            background:  isLocation+'/categories/Salo.jpg'
          },
          {
            id: 1,
            title: 'CАЛАТИ',
            description: '4',
            background:  isLocation+'/categories/Chahtoni.jpg'
          },
          {
            id: 2,
            title: 'ГАРЯЧІ ЗАКУСКИ',
            description: '5',
            background:  isLocation+'/categories/Sachivi.jpg'
          },
          {
            id: 3,
            title: 'ПЕРШІ СТРАВИ',
            description: '4',
            background:  isLocation+'/categories/Harcho.jpg'
          },
          {
            id: 4,
            title: 'ДРУГІ СТРАВИ',
            description: '6',
            background:  isLocation+'/categories/Odzuhari.jpg'
          },
          {
            id: 5,
            title: 'МАНГАЛ',
            description: '4',
            background:  isLocation+'/categories/Lula.jpg'
          },
          {
            id: 6,
            title: 'ДЕСЕРТИ',
            description: '3',
            background:  isLocation+'/categories/IceScream.jpg'
          },
          {
            id: 7,
            title: 'ДЛЯ ПІКНІКА',
            description: '3',
            background:  isLocation+'/categories/pickeck.jpg'
          }
        ],
        menuimages:[
          isLocation+'/menu/0.jpg',
          isLocation+'/menu/1.jpg',
          isLocation+'/menu/2.jpg',
          isLocation+'/menu/3.jpg',
          isLocation+'/menu/4.jpg',
          isLocation+'/menu/5.jpg',
          isLocation+'/menu/6.jpg',
          isLocation+'/menu/7.jpg',
          isLocation+'/menu/8.jpg',
          isLocation+'/menu/9.jpg',
          isLocation+'/menu/10.jpg'
        ]
      },
      newsBlock: {
        title:'< ЩО НОВОГО? >',
        subTitle:'ЩО НОВОГО?',
        slogan: 'Новини ресторану "Єреван" у Львові',
        newsArray: [
          {
            id: 0,
            title:'Оновлення сайту',
            dataType: 'image',
            dataUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/79/4b/81/entrance-to-the-restaurant.jpg',
            text:'Сьогодні ми обновили для вас сайт ресторану "Єреван", тепер він став красивішим та ще зручнішим у використанні, і це все зобрено для того щоб ви могли з задоволенням користуватися нашими послугами.',
            date:'17.07.2019',
          },
          {
            id: 1,
            title:'Наше меню',
            dataType: 'image',
            dataUrl: 'https://media-public.canva.com/MADZ_1nUdSM/1/thumbnail_large.jpg',
            text:'Ми оновили наше меню, а точныше його доповнили, быльш ніж 40 смачних страв, включаючи десертів. Завітайте до нас та скуштуйте чогось смачненького.',
            date:'17.07.2019',
          },
          {
            id: 2,
            title:'День щастя',
            dataType: 'image',
            dataUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoBNrCFpdfFQ-b0w2NjyhEDXNs1G-UliIFBT7v5D-l8GwC4hSF',
            text:'Щастя - це те що не можна купити, но ми можемо вам це подарити! Приходьте до нас на свято щастя та отримайте незабутні емоції, відчуття. Унікальні страви здивують кожного.',
            date:'17.07.2019',
          },
          {
            id: 3,
            title:'Оновлення сайту',
            dataType: 'image',
            dataUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/79/4b/81/entrance-to-the-restaurant.jpg',
            text:'Сьогодні ми обновили для вас наш сайт, тепер він став ще зручнішим у використанні.',
            date:'17.07.2019',
          },
          {
            id: 4,
            title:'Оновлення сайту',
            dataType: 'image',
            dataUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/79/4b/81/entrance-to-the-restaurant.jpg',
            text:'Сьогодні ми обновили для вас наш сайт, тепер він став ще зручнішим у використанні.',
            date:'17.07.2019',
          },
          {
            id: 5,
            title:'Оновлення сайту',
            dataType: 'image',
            dataUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/79/4b/81/entrance-to-the-restaurant.jpg',
            text:'Сьогодні ми обновили для вас наш сайт, тепер він став ще зручнішим у використанні.',
            date:'17.07.2019',
          },
          {
            id: 6,
            title:'Оновлення сайту',
            dataType: 'image',
            dataUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/79/4b/81/entrance-to-the-restaurant.jpg',
            text:'Сьогодні ми обновили для вас наш сайт, тепер він став ще зручнішим у використанні.',
            date:'17.07.2019',
          },
          {
            id: 7,
            title:'Оновлення сайту',
            dataType: 'image',
            dataUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/79/4b/81/entrance-to-the-restaurant.jpg',
            text:'Сьогодні ми обновили для вас наш сайт, тепер він став ще зручнішим у використанні.',
            date:'17.07.2019',
          },
          {
            id: 8,
            title:'Оновлення сайту',
            dataType: 'image',
            dataUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/79/4b/81/entrance-to-the-restaurant.jpg',
            text:'Сьогодні ми обновили для вас наш сайт, тепер він став ще зручнішим у використанні.',
            date:'17.07.2019',
          },
          {
            id: 9,
            title:'Оновлення сайту',
            dataType: 'image',
            dataUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/79/4b/81/entrance-to-the-restaurant.jpg',
            text:'Сьогодні ми обновили для вас наш сайт, тепер він став ще зручнішим у використанні.',
            date:'17.07.2019',
          }
        ]
      },
      galleryBlock: {
        title:'< Фотогалерея >',
        subTitle:'Фотогалерея',
        slogan: 'Затишок та комфорт і справжня атмосфера Вірменії у ресторані "Єреван" у Львові',
        images: [
          {
                  src: isLocation+"/gallery/1.jpg",
                  thumbnail: isLocation+"/gallery/1.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },
          {
                  src: isLocation+"/gallery/2.jpg",
                  thumbnail: isLocation+"/gallery/2.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/3.jpg",
                  thumbnail: isLocation+"/gallery/3.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/4.jpg",
                  thumbnail: isLocation+"/gallery/4.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/5.jpg",
                  thumbnail: isLocation+"/gallery/5.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/6.jpg",
                  thumbnail: isLocation+"/gallery/6.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/7.jpg",
                  thumbnail: isLocation+"/gallery/7.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/7.jpg",
                  thumbnail: isLocation+"/gallery/7.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/8.jpg",
                  thumbnail: isLocation+"/gallery/8.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/9.jpg",
                  thumbnail: isLocation+"/gallery/9.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/10.jpg",
                  thumbnail: isLocation+"/gallery/10.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/11.jpg",
                  thumbnail: isLocation+"/gallery/11.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/12.jpg",
                  thumbnail: isLocation+"/gallery/12.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/13.jpg",
                  thumbnail: isLocation+"/gallery/13.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/14.jpg",
                  thumbnail: isLocation+"/gallery/14.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/15.jpg",
                  thumbnail: isLocation+"/gallery/15.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/16.jpg",
                  thumbnail: isLocation+"/gallery/16.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/17.jpg",
                  thumbnail: isLocation+"/gallery/17.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/18.jpg",
                  thumbnail: isLocation+"/gallery/18.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/19.jpg",
                  thumbnail: isLocation+"/gallery/19.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/20.jpg",
                  thumbnail: isLocation+"/gallery/20.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/21.jpg",
                  thumbnail: isLocation+"/gallery/21.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/22.jpg",
                  thumbnail: isLocation+"/gallery/22.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/23.jpg",
                  thumbnail: isLocation+"/gallery/23.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/24.jpg",
                  thumbnail: isLocation+"/gallery/24.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/25.jpg",
                  thumbnail: isLocation+"/gallery/25.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/26.jpg",
                  thumbnail: isLocation+"/gallery/26.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          },{
                  src: isLocation+"/gallery/27.jpg",
                  thumbnail: isLocation+"/gallery/27.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: "Булочка"
          }
        ]
      },
      bookNowBlock: {
        title:'< БРОНЮВАННЯ СТОЛИКА ЧИ БЕНКЕТА >',
        subTitle:'БРОНЮВАННЯ СТОЛИКА ЧИ БЕНКЕТА',
        slogan: 'Швидше забронюй столик'
      },
      mapBlock: {
        title:'< МИ НА КАРТІ >',
        subTitle:'МИ НА КАРТІ',
        slogan: 'Ресторан "Єреван" на карті'
      },
      staffBlock: {
        title:'< Наш персонал >',
        subTitle:'Наш персонал',
        slogan: 'Люди що дбають про вас',
        personal: [
          {
            name: 'Юлія',
            title: '',
            position: 'Повар',
            photo: isLocation+'/staff/team4.png'
          },
          {
            name: 'Владислав',
            title: '',
            position: 'Повар-кондитер',
            photo: isLocation+'/staff/team1.png'
          },
          {
            name: 'Валерій',
            title: '',
            position: 'Шеф-повар',
            photo: isLocation+'/staff/team2.png'
          },
          {
            name: 'Христина',
            title: '',
            position: 'Менеджер',
            photo: isLocation+'/staff/team3.png'
          },
          {
            name: 'Сергій',
            title: '',
            position: 'Офіціант',
            photo: isLocation+'/staff/team5.png'
          }
        ]
      },
      statisticBlock: {
        backgroundVideo: isLocation+'/video/video.webm',
        icon1: isLocation+'/icons/dish.svg',
        icon2: isLocation+'/icons/heart-sketch.svg',
        icon3: isLocation+'/icons/banquet-table.svg',
        icon4: isLocation+'/icons/waiter.svg'
      }
    }
    this.componentScrollFunction = this.componentScrollFunction.bind(this);
  }

  openFullMenuBlock(){
    this.setState({
      openfullMenu: true
    });
  }

  closeFullMenuBlock(){
    this.setState({
      openfullMenu: false
    })
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
      menuBlockTop: document.getElementById('MenuBlock').offsetTop - document.body.offsetHeight + 50
    });
  }

  openedFullNav(){
    if(this.state.fullnav){
      this.setState({fullnav: false});
    }else{
      this.setState({fullnav: true});
    }
  }

  openCloseBarSocials(){
    if(this.state.openBarSocials){
      this.setState({openBarSocials: false});
    }else{
      this.setState({openBarSocials: true});
    }
  }

  openCloseSignIn(){
    if(this.state.openedSignIn){
      this.setState({openedSignIn: false});
    }else{
      this.setState({openedSignIn: true});
    }
  }

  render(){
    return <div className="content" id="content">
      {this.state.preloader ? <Pace color="#27ae60" height={3}/> : null }
      <PreloaderBlock status={this.state.preloader} loader={this.state.loader} logotype={this.state.logotype}/>
      <NavigationBarBlock
        openedFullNav={this.openedFullNav.bind(this)}
        open={this.state.fullnav}
        socials={this.state.socials}
        top={this.state.scrollTop}
        openBarSocials={this.state.openBarSocials}
        openCloseBarSocials={this.openCloseBarSocials.bind(this)}
        openCloseSignIn={this.openCloseSignIn.bind(this)}
      />
      <SignIn openedSignIn={this.state.openedSignIn}/>
      <FullNavigation open={this.state.fullnav} menu={this.state.menu} openedFullNav={this.openedFullNav.bind(this)}/>
      <FullMenu open={this.state.openfullMenu} menuimages={this.state.menuBlock.menuimages} closemenu={this.closeFullMenuBlock.bind(this)}/>
      <HeadBlock
        top={this.state.scrollTop}
        data={this.state.headBlock}
        menu={this.state.menu}
        bigMainLogo={this.state.bigMainLogo}
        logotype={this.state.logotype}
        openfullmenublock={this.openFullMenuBlock.bind(this)}
      />
      <AboutBlock data={this.state.aboutBlock} socials={this.state.socials}/>
      <MenuBlock
        data={this.state.menuBlock}
        top={this.state.scrollTop}
        menuBlockTop={this.state.menuBlockTop}
        closefullmenublock={this.closeFullMenuBlock.bind(this)}
        openfullmenublock={this.openFullMenuBlock.bind(this)}
      />
      <StatisticBlock data={this.state.statisticBlock} top={this.state.scrollTop}/>
      <NewsBlock data={this.state.newsBlock}/>
      <GalleryBlock data={this.state.galleryBlock}/>
      <BookNowBlock data={this.state.bookNowBlock} menu={this.state.menu}/>
      <MapBlock data={this.state.mapBlock}/>
      <StaffBlock data={this.state.staffBlock}/>
      <FooterBlock menu={this.state.menu}/>
      <AuthorBlock/>
    </div>
  }
}

ReactDOM.render(<Erevan/>, document.getElementById('root'));
