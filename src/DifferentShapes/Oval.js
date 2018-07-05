import React, { Component } from 'react';
import { View, Text , Button , Image , Dimensions } from 'react-native';

export default class Oval extends Component {
  render() {
    return(
        <View style={styles.oval} />
    )
  }
}

const styles={
  oval: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red',
    transform: [
      {scaleX: 2}
    ]
  }
}