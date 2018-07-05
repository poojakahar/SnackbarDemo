import React, { Component } from 'react';
import { View, Text , Button , Image , Dimensions } from 'react-native';

export default class Trapezoid extends Component {
  render() {
    return(
        <View style={styles.trapezoid}/>
    )
  }
}

const styles = {
  trapezoid: {
    borderBottomWidth: 100,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomColor: '#f00',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    width: 200,
    alignSelf: 'center'
  }
}