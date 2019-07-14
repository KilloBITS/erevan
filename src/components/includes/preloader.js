import React from 'react';
import ReactVivus from 'react-vivus';

class PreloaderBlock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      status: true
    }
  }
  closeLoader(){
    this.setState({
      status: false
    })
  }
  render() {
    return <div className={(this.state.status)?"preloader":"preloader hide"} id="PreloaderBlock">
      <ReactVivus
          id="Erevan_logo"
          option={{
            file: this.props.logotype,
            duration: 200,
            animTimingFunction: 'EASE',
            type: 'oneByOne',
            onReady: console.log
          }}
          callback={this.closeLoader.bind(this)}
        />
    </div>
  }
}

export default PreloaderBlock;
