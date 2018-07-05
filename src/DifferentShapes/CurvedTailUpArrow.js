import React, { Component } from 'react';
import { View, Text , Button , Image , Dimensions } from 'react-native';

export default class CurvedTailUpArrow extends Component {
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
    height: 50,
    width: 20,
    backgroundColor: '#07a9ff',
    overflow: 'visible'
  },
  curvedTailArrowTail: {
    //borderTopWidth: 10,
    borderBottomWidth: 20,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderStyle: 'solid',
    //borderTopColor: 'transparent',
    borderBottomColor: '#00f',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    overflow: 'visible'

  },
  curvedTailArrowTriangle: {
    borderTopWidth: 0,
    borderBottomWidth: 20,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#f00',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomRightRadius: 50,
    height: 50,
    width: 5,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    overflow: 'visible'
  }
};