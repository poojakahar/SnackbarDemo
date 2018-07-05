import React, { Component } from 'react';
import { View, Text , Button , Image , Dimensions } from 'react-native';
import Triangle from "./Triangle";
import TriangleDown from "./TriangleDown";

export default class SixStar extends Component {
  render() {
    return (
      <View style={styles.starsix}>
        <Triangle style={styles.starSixUp} />
        <TriangleDown style={styles.starSixDown} />
      </View>
    )
  }
}

const styles = {
  starsix: {
    width: 100,
    height: 100
  },
  starSixUp: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  starSixDown: {
    position: 'absolute',
    top: 25,
    left: 0
  }
}