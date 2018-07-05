import Emoticons from 'react-native-emoticons';
import React, { Component } from 'react';
import { View, Text , Button , Image , Dimensions } from 'react-native';

export default class EmojiDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disp: false,
    }
  }

  _onEmoticonPress = (res) => {
    alert(res.code)
  }

  render() {
    return(
      <View style={{flex:1}}>
        <Button onPress={() => this.setState({disp: !this.state.disp})} title={"Open Emoji"}/>
        <Emoticons onEmoticonPress={this._onEmoticonPress}
                   show={this.state.disp}/>
      </View>
    )
  }
}