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
        bgUrl,
        form,
        validation,
        btnText,
        onPress,
        option
      } = this.props;
      const Layout = LOGIN_LAYOUT[option - 1] || LOGIN_LAYOUT[0]

    return (
      <Layout
      form={form}
      bgUrl={bgUrl}
      btnText={btnText}
      validation={validation}
      onPress={onPress}
      />
      
    );
  }
}

export default Login;