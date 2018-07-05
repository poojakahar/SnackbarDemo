import React, { Component } from 'react';
import { View, Text , Button , Image , Dimensions, ScrollView } from 'react-native';
import Triangle from './Triangle';
import TriangleDown from './TriangleDown';
import TriangleLeft from './TriangleLeft';
import TriangleRight from './TriangleRight'
import Oval from './Oval';
import TriangleTopLeft from "./TriangleTopLeft";
import CurvedTailArrow from "./CurvedTailArrow";
import CurvedTailUpArrow from "./CurvedTailUpArrow";
import Trapezoid from "./Trapezoid";
import SixStar from "./SixStar";
import FiveStar from "./FiveStar";
import Heart from "./Heart";
import FacebookIcon from "./FacebookIcon";

export default class index extends Component {
  render() {
    return(
      <ScrollView style={{flex:1,paddingTop: 50}}>
        <View style={styles.container}>
          <Triangle/>
        </View>
        <View style={styles.container}>
          <TriangleDown/>
        </View>
        <View style={styles.container}>
          <TriangleLeft/>
        </View>
        <View style={styles.container}>
          <TriangleRight/>
        </View>
        <View style={styles.container}>
          <TriangleTopLeft/>
        </View>
        <View style={styles.container}>
          <CurvedTailArrow/>
        </View>
        <View style={styles.container}>
          <Trapezoid/>
        </View>
        <View style={styles.container}>
          <SixStar/>
        </View>
        <View style={styles.container}>
          <Heart/>
        </View>
        <View style={styles.container}>
          <FacebookIcon/>
        </View>
      </ScrollView>
    )
  }
}

const styles = {
  container: {
    alignItems: 'center',
    marginBottom: 10,
  }
}