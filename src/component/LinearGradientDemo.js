import React,{ Component } from 'react';
import { View, Text, TouchableOpacity ,Alert ,SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class LinearGradientDemo extends Component
{
  render() {
    return(
      <SafeAreaView style={{flex:1,alignItems: 'center', justifyContent: 'center',backgroundColor:'#0f0'}}>
        <LinearGradient
          colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
          start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
          style={{ height: 48, width: 200, alignItems: 'center', justifyContent: 'center', width: 200}}
        >
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>
    )
  }
}

const styles={
  buttonContainer: {
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#4C64FF',
    padding: 15,
    marginLeft: 1,
    marginRight: 1,
    width: 198
  }
}