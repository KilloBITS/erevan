import React from 'react';

let thisFooterMenuToTop = (e) => {
  let toTopposition = document.getElementById(e.target.getAttribute('toelement')).offsetTop;
  document.getElementById('root').scrollTo({top: toTopposition, behavior: 'smooth'});
}

let footerNavigationMenu = (footerDataMenu) => {
    const menuBtn = footerDataMenu.map((comp, key) => <div key={key} onClick={thisFooterMenuToTop.bind(this)} toelement={comp.toelement} className="footerMenuNavLabel">{comp.title}</div>);
    return menuBtn
}

class FooterBlock extends React.Component {
  render() {
    return <div className="block footer" id="FooterBlock">
      <div className="footerBlockContain">
        <div className="footerMinBlock borderRight footerNavigation">
          <div className="miniFooterTitle">Карта сайту</div>
          {footerNavigationMenu(this.props.menu)}
        </div>
        <div className="footerMinBlock borderRight">
          <div className="miniFooterTitle">Контакти</div>
          <div className="footerGraficLine">
            <div className="graficTitle">Email:</div>
            <div className="graficData">restoran.erevan@gmail.com</div>
          </div>
          <div className="footerGraficLine">
            <div className="graficTitle">Телефон:</div>
            <div className="graficData">+38 (032) 237 77 21 </div>
            <div className="graficData">+38 (098) 174 24 00</div>
          </div>

          <div className="footerGraficLine _callBack">
            <div className="graficTitle">Зворотній звязок:</div>
            <input type="email" className="callbackArea"/>
            <input type="button" className="callbackAreaBtn"/>
          </div>
        </div>
        <div className="footerMinBlock">
          <div className="miniFooterTitle">Графік гоботи</div>
          <div className="footerGraficLine">
            <div className="graficDay">Понеділок</div>
            <div className="graficTime">10:00–22:00</div>
          </div>
          <div className="footerGraficLine">
            <div className="graficDay">Вівторок</div>
            <div className="graficTime">10:00–22:00</div>
          </div>
          <div className="footerGraficLine">
            <div className="graficDay">Середа</div>
            <div className="graficTime">10:00–22:00</div>
          </div>
          <div className="footerGraficLine">
            <div className="graficDay">Четвер</div>
            <div className="graficTime">10:00–22:00</div>
          </div>
          <div className="footerGraficLine">
            <div className="graficDay">Пятниця</div>
            <div className="graficTime">10:00–22:00</div>
          </div>
          <div className="footerGraficLine">
            <div className="graficDay">Субота</div>
            <div className="graficTime">11:00–22:00</div>
          </div>
          <div className="footerGraficLine">
            <div className="graficDay">Неділя</div>
            <div className="graficTime">11:00–22:00</div>
          </div>
        </div>
        <div className="footerMinBlock borderLeft">
          <div className="miniFooterTitle">Наш Інстаграм</div>
          <div className="footerInstagram">
            <div className="footerInstagramPhoto"></div>
            <div className="footerInstagramTag">
              <div className="tagTitle">Instagram</div>
              <div className="tag">#erevan_rest</div>
              <div className="podpiska">
                Підписатися
              </div>
            </div>
          </div>
          <div className="miniPhotoInstaText">
          Ресторан смачної вірменської кухні👌<br/>
          🍲цікаво про їжу;<br/>
          🍖смачно про наші страви;<br/>
          🏔️факти про традиції Вірменії.<br/>
          </div>
          <div className="footerInstagramMiniPhoto">
            <div className="miniPhotoInstaFooter">
              <img src={'https://instagram.flwo4-2.fna.fbcdn.net/vp/713a6faf28734d1a103df5bb403a90c8/5DBE1C82/t51.2885-15/e35/65280369_376535716327903_811924113438190303_n.jpg?_nc_ht=instagram.flwo4-2.fna.fbcdn.net'} alt=""/>
            </div>
            <div className="miniPhotoInstaFooter">
              <img src={'https://instagram.flwo4-2.fna.fbcdn.net/vp/adf9ef8ae595bad429b89239868b51c1/5DB033EE/t51.2885-15/e35/65045110_649799822161601_8449943120889729164_n.jpg?_nc_ht=instagram.flwo4-2.fna.fbcdn.net'} alt=""/>
            </div>
            <div className="miniPhotoInstaFooter">
              <img src={'https://instagram.flwo4-2.fna.fbcdn.net/vp/dc487fb3a3c91c8534b0982d88344f11/5DC7BD63/t51.2885-15/sh0.08/e35/p640x640/60270127_254450288738546_4361011679390243054_n.jpg?_nc_ht=instagram.flwo4-2.fna.fbcdn.net'} alt=""/>
            </div>
            <div className="miniPhotoInstaFooter">
              <img src={'https://instagram.flwo4-2.fna.fbcdn.net/vp/3ec80e9922ddba50f8cbfba70998c67f/5DBEA845/t51.2885-15/e35/60022428_872709779738350_6037330093813034180_n.jpg?_nc_ht=instagram.flwo4-2.fna.fbcdn.net'} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default FooterBlock;
