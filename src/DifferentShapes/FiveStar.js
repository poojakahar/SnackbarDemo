import React, { Component } from 'react';
import { View, Text , Button , Image , Dimensions } from 'react-native';
import SixStar from "./SixStar";
import Triangle from "./Triangle";
import TriangleDown from "./TriangleDown";

export default class FiveStar extends Component {
  render() {
    return(
        <View style={styles.fiveStarContainer}>
          <Triangle/>
          <TriangleDown style={styles.fiveStarTriangleDown}/>
          <Triangle style={styles.fiveStarLastTriangle}/>
        </View>
    )
  }
};

const styles = {
  fiveStarContainer: {
    height: 100,
    width: 100,
  },
  fiveStarTriangleDown: {
    position: 'absolute',
    top: 40,
  },
  fiveStarLastTriangle: {
    borderBottomColor: '#fff',
    position: 'absolute',
    top: 60,
  }
};