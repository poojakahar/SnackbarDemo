import React, { Component } from 'react';
import { View, Text , Button , Image , Dimensions } from 'react-native';

export default class Heart extends Component {
  render() {
    return(
      <View style={[styles.heart, this.props.style]}>
        <View style={styles.leftHeart} />
        <View style={styles.rightHeart} />
      </View>
    )
  }
}

const styles = {
  heart: {
    width: 50,
    height: 50
  },
  heartShape: {
    width: 30,
    height: 45,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#6427d1',
  },
  leftHeart: {
    transform: [
      {rotate: '-45deg'}
    ],
    left: 5
  },
  rightHeart: {
    transform: [
      {rotate: '45deg'}
    ],
    right: 5
  }
}