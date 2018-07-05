import React, { Component } from 'react';
import { View, Text , Button , Image , Dimensions } from 'react-native';

export default class CurvedTailArrow extends Component {
  render() {
    return(
      <View style={styles.curvedTailArrow}>
        <View style={styles.curvedTailArrowTail} />
        <View style={styles.curvedTailArrowTriangle} />
      </View>
    )
  }
}

const styles = {
  curvedTailArrow: {
    backgroundColor: 'transparent',
    overflow: 'visible',
    width: 30,
    height: 25
  },
  curvedTailArrowTriangle: {
    backgroundColor: 'transparent',
    width: 0,
    height: 0,
    borderTopWidth: 9,
    borderTopColor: 'transparent',
    borderRightWidth: 9,
    borderRightColor: 'red',
    borderStyle: 'solid',
    transform: [
      {rotate: '10deg'}
    ],
    position: 'absolute',
    bottom: 9,
    right: 3,
    overflow: 'visible'
  },
  curvedTailArrowTail: {
    backgroundColor: 'transparent',
    position: 'absolute',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 3,
    borderTopColor: 'red',
    borderStyle: 'solid',
    borderTopLeftRadius: 12,
    top: 1,
    left: 0,
    width: 20,
    height: 20,
    transform: [
      {rotate: '45deg'}
    ]
  }
}