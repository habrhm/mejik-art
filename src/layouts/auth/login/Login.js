import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginOne from './Login-one';
import LoginTwo from './Login-two';

const LOGIN_LAYOUT = [LoginOne, LoginTwo]


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  

  render() {
    const {
        // bgUrl,
        // form,
        // validation,
        // btnText,
        option,
        // actions : {
        // },
      } = this.props;
      const Layout = LOGIN_LAYOUT[option - 1]

    return (
      <Layout
      {...this.props}
      />
      
    );
  }
}




  
export default Login;