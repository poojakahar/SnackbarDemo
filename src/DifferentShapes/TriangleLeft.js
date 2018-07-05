import React, { Component } from 'react';
import { View, Text , Button , Image , Dimensions } from 'react-native';
import Triangle from './Triangle';

export default class TriangleLeft extends Component {
  render() {
    return(
      <Triangle style={styles.triangleDown}/>
    )
  }
}

const styles={
  triangleDown: {
    transform: [
      {rotate: '-90deg'}
    ]
  }
}