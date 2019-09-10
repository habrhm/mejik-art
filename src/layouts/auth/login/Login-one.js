import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Button, Layout, Input} from 'react-native-ui-kitten';

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(props.form);
    this.state = {
        email  : this.props.form.email,
        password :this.props.form.password,
    };
  }

  onEmailInputTextChange = (email) => {
    this.setState({ email });
  };

    onPasswordInputTextChange = (password) => {
    this.setState({ password });
  };

  render() {
    const {
        bgUrl,
        form,
        validation,
        btnText,
      } = this.props;
      const {
          emailPlaceholder,
          passwordPlaceholder,
          email,
          password
      } = form
    return (
      <Layout
        style={{
            justifyContent : 'center',
            alignItems : 'center',
            flex: 1
        }}
      >

          <Input
            label='EMAIL'
            placeholder={emailPlaceholder}
            value={email}
           // onChangeText={this.onEmailInputTextChange}
          />
          <Input
            label='password'
            placeholder={passwordPlaceholder}
            secureTextEntry={true}
            value={password}
            //onChangeText={this.onPasswordInputTextChange}
          />
          <Button>{btnText}</Button>
      </Layout>
    );
  }
}

export default Login;
