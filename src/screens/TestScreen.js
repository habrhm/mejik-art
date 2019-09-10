import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Picker from '../components/Picker';
import { Picker as PickerComp } from '@react-native-community/picker';
import Login from '../layouts/auth/login/Login';

class TestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      // <View>
      //   <Picker
      //     selectedValue={this.state.language}
      //     style={{height: 50, width: 100}}
      //     onValueChange={(itemValue, itemIndex) =>
      //     this.setState({language: itemValue})
      // } 
      //   >
      //   <PickerComp.Item label="Java" value="java" />
      // <PickerComp.Item label="JavaScript" value="js" />
      //   </Picker>
      // </View>
<Login
  option={1}
/>
    );
  }
}

export default TestScreen;
