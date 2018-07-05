import React,{Component} from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Dimensions
} from 'react-native';
/*import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import * as d3 from 'd3'*/
import RNAChart from 'react-native-animate-chart';

export default class ChatDemoUsingPathJS extends Component {
  render(){
    return(
      <RNAChart
        width="320"
        height="300"
        title="Awesome React Native"
        subtitle="library for charting things"
        tootip = {{
          text:function(index,data){
            return `The ${index} data is ${data}`
          }
        }}
        xAxis = {{
          crosshair:true
        }}
      />
    )
  }
}