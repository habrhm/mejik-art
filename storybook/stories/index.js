import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, object, text, number } from '@storybook/addon-knobs';

// eslint-disable-next-line import/extensions
import SignIn from '../../src/layouts/Auth/SignIn';


  storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .add('Login', () => {
      const option = number("option", 1)
      const form = object("form", {
        email : "a@a.com",
        emailPlaceholder : "Insert Email",
        password : "Password",
        passwordPlaceholder :"Insert Password"
      })
      const btnText = text("btnText", "Login")
      const bgUrl = text("bgUrl", "https://melaniepfeffer.files.wordpress.com/2012/09/img_05461.jpg")
      
      
      return(
    <SignIn 
      option={option}
      bgUrl={bgUrl}
      form={form}
      btnText={btnText}
      onPressBtn={() => action("onPressBtn()")}
    />
  )});
  