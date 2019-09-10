import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Picker as PickerComp } from '@react-native-community/picker';

class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {
        onValueChange,
        selectedValue,
        style,
        testID,
        enabled,
        mode,
        prompt,
        itemStyle,
      } = this.props
    return (
      <PickerComp
        onValueChange={onValueChange}
        selectedValue={selectedValue}
        style={style}
        testID={testID}
        enabled={enabled}
        mode={mode}
        prompt={prompt}
        itemStyle={itemStyle}
    //   selectedValue={this.state.language}
    //   style={{height: 50, width: 100}}
    //   onValueChange={(itemValue, itemIndex) =>
    //     this.setState({language: itemValue})
    //   } 
    >
          {this.props.children}
      </PickerComp>
    );
  }
}

export default Picker;
