import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SignIn extends React.Component {
  render() {
    return <div className={(this.props.openedSignIn)?"signIn show":"signIn"}>

    </div>
  }
}

export default SignIn;
