import React, { Component } from 'react';
import { View, Text , Button , Image , Dimensions } from 'react-native';

export default class Triangle extends Component {
  render() {
    return(
        <View style={[styles.triangle, this.props.style]} />
    )
  }
}

const styles={
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red'
  }
}