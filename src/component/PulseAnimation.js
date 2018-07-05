import React,{ Component } from 'react';
import { View, Text, TouchableOpacity ,Alert ,SafeAreaView } from 'react-native';
import Pulse from 'react-native-pulse';

export default class PulseAnimation extends Component {
  render() {
    return(
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Pulse color='green' numPulses={3} diameter={400} speed={20} duration={2000} />
      </View>
    )
  }
}