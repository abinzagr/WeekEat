import React, { Component } from 'react';
import { AppRegistry, View, TextInput } from 'react-native';

class UselessTextInput extends Component {
    render() {
      return (
        <TextInput
          {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
          editable = {true}
          maxLength = {40}
        />
      );
    }
  }
  export default class UselessTextInputMultiline extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: 'Useless Multiline Placeholder',
      };
    }
}  