import React from 'react';
import TimeKeeper from 'react-timekeeper';
import MaskedInput from 'react-text-mask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from './includes/title.js';

class BookNowBlock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      opentimePicker: false,
      date: '',
      name:'',
      time:'',
      email:'',
      comment:'',
      number:''
    }
  }
  onBlurTime(){
    this.setState({
      opentimePicker: false
    });
  }
  onDoneTime(el){

    document.getElementById('reservTime').value = "00:00"
    this.setState({
      opentimePicker: false
    });
  }

  onFocusFime(){
    this.setState({
      opentimePicker: true
    })
  }
  render() {
    return <div className="block booknow" id="BookNowBlock">
      <Title title={this.props.data.title} subtitle={this.props.data.subTitle} color="#e9e9e9" subcolor="rgba(232, 232, 232, 0.1)"/>
      <div className="slogan">
        {this.props.data.slogan}
      </div>
      <div className="reservationContent">
        <div className="reservationContentData">
          <div className="miniReservationTitle">
            <FontAwesomeIcon icon={['fas', 'crown']}/>
            Дата
          </div>
          <input type="date" className="reservationInput"/>
          <div className="open_close_picker open_close_picker_date"></div>
        </div>
        <div className="reservationContentData">
          <div className="miniReservationTitle">
            <FontAwesomeIcon icon={['fas', 'crown']}/>
            Імя та Прізвище
          </div>
          <input type="text" className="reservationInput" placeholder="Введіть імя та прізвище"/>
          <div className="open_close_picker open_close_picker_name"></div>
        </div>
        <div className="reservationContentData">
          <div className="miniReservationTitle">
            <FontAwesomeIcon icon={['fas', 'crown']}/>
            Час
          </div>
          <input type="text" value="12:00" id="reservTime" className="reservationInput"/>
          <div className="open_close_picker open_close_picker_time" onClick={this.onFocusFime.bind(this)}></div>
          <div className={(this.state.opentimePicker)?"timePickerBlock":"timePickerBlock hide"}>
          <TimeKeeper hourMode="formatted24"
            config={{
                FONT_FAMILY: 'DefaultText',
                HOURMODE: 'formatted24',
                TIMEPICKER_BACKGROUND: 'rgb(105, 0, 0)',
                DONE_BUTTON_COLOR: 'white',
                DONE_BUTTON_BORDER_COLOR: '#ededed'
            }}
            onDoneClick={this.onDoneTime.bind(this)}
          />
          </div>
        </div>
        <div className="reservationContentData">
          <div className="miniReservationTitle">
            <FontAwesomeIcon icon={['fas', 'crown']}/>
            Електронна пошта
          </div>
          <input type="email" className="reservationInput" placeholder="Введіть email"/>
          <div className="open_close_picker open_close_picker_email"></div>
        </div>
        <div className="reservationContentData">
          <div className="miniReservationTitle">
            <FontAwesomeIcon icon={['fas', 'crown']}/>
            Кількість місць
          </div>
          <input type="text" className="reservationInput" placeholder="Введіть кількість місць"/>
          <div className="open_close_picker open_close_picker_message"></div>
        </div>
        <div className="reservationContentData">
          <div className="miniReservationTitle">
            <FontAwesomeIcon icon={['fas', 'crown']}/>
            Номер телефону
          </div>
          <MaskedInput
            mask={['+', '3', '8','(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            className="reservationInput"
            placeholder="+38(___) ___-____"
            guide={true}
            id="my-input-id"
            onBlur={() => {}}
            onChange={() => {}}
          />
          <div className="open_close_picker open_close_picker_number"></div>
        </div>
        <div className="reservationContentDatafull">
          <div className="defaultButton">Забронювати</div>
        </div>
      </div>
    </div>
  }
}

export default BookNowBlock;
