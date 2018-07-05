import React,{ Component } from 'react';
import { View, Text, TouchableOpacity ,Alert ,SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class ReactNativeAnimatable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fontSize: 20,
    }
  }

  _renderZoom() {
    return(
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text>
      </View>
    )
  }

  render() {
    return(
      <View style={{flex: 1, backgroundColor: '#fff',justifyContent:'center',alignItems:'center'}}>
        <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text>
        <Animatable.Text animation="slideInDown" iterationCount="infinite" direction="alternate">Up and down you go</Animatable.Text>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text>
        <TouchableOpacity onPress={() => this.setState({fontSize: (this.state.fontSize || 10) + 5 })}>
          <Animatable.Text transition="fontSize" style={{fontSize: this.state.fontSize || 10}}>Size me up, Scotty</Animatable.Text>
        </TouchableOpacity>
      </View>
    )
  }
}