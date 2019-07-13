import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee , fas} from '@fortawesome/free-solid-svg-icons';

//Styles
import './styles/index.css';
import './styles/index.min.css';

//import global block
import PreloaderBlock from './components/includes/preloader.js';
//import components
import HeadBlock from './components/head_block.js'

library.add(fab, faCheckSquare, faCoffee, fas);

class Erevan extends React.Component{
  render(){
    return <div className="content" id="content">
      <PreloaderBlock/>
      <HeadBlock/>
    </div>
  }
}

ReactDOM.render(<Erevan/>, document.getElementById('root'));
