import React, { Component } from 'react';
import { View, Text , Button , Image , Dimensions } from 'react-native';

export default class FacebookIcon extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.facebookFont}>f</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    height: 40,
    width:  40,
    backgroundColor:'#1349ff',
    alignItems: 'flex-end',
    borderRadius: 3,
  },
  facebookFont: {
    fontSize: 60,
    color: '#fff',
    fontWeight: '600',
    paddingRight: 5,
  }
}