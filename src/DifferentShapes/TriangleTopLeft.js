import React, { Component } from 'react';
import { View, Text , Button , Image , Dimensions } from 'react-native';

export default class TriangleTopLeft extends Component {
  render() {
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center',marginBottom:10}}>
        <View style={[styles.triangle, this.props.style]} />
        <View style={styles.textContainer}>
          <Text>Top Left Triangle</Text>
        </View>
      </View>
    )
  }
}

const styles={
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 100,
    borderTopWidth: 100,
    borderTopColor: 'red',
    borderRightColor: 'transparent'
  },
  textContainer: {
    position:'absolute',
    transform: [
      {rotate: '-45deg'}
    ],
    backgroundColor:'transparent',
    paddingBottom: 20,
  },
};