import React, { Component } from 'react';
import { View, Text , Button , Image , Dimensions } from 'react-native';
import Triangle from './Triangle';

export default class TriangleDown extends Component {
  render() {
    return(
      <Triangle style={[styles.triangleDown, this.props.style]}/>
    )
  }
}

const styles={
  triangleDown: {
    transform: [
      {rotate: '180deg'}
    ]
  }
}