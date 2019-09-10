import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, object, text, number } from '@storybook/addon-knobs';

// eslint-disable-next-line import/extensions
import Login from '../../src/layouts/auth/login/Login';


  storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .add('Login', () => {
      const opt = number("Option", 1)
      const form = object("Form", {
        email : "a@a.com",
        emailPlaceholder : "Insert Email",
        password : "Password",
        passwordPlaceholder :"Insert Password"
      })
      const btnText = text("Button Text", "Login")
      
      
      return(
    <Login 
      option={opt}
      form={form}
      btnText={btnText}
    />
  )});
  