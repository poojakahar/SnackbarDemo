import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Picker from 'react-native-multiple-picker';

export default class MultiplePickerDateMonth extends Component {
  constructor() {
    super();

    this.state = {
      selectedValue: null
    }
  }

  render() {

    let firstYear = 1970;
    let years = new Array(40).fill({label: null}).map((item, id) => {
      return {label: id + firstYear, key: id}});

    let days = new Array(30).fill({label: null}).map((item, id) => {
      return {label: id + 1, key: id}});

    let months = new Array(12).fill({label: null}).map((item, id) => {
      return {label: id + 1, key: id}});


    const data  = [months,years];
    const label = ['Month','Year'];

    const gradStyle = {
      start: {x: 0, y: 0},
      end: {x: 1, y: 1.0},
      locations: [0, 1],
      colors: ['#eeeeee', '#b9b9b9']
    };

    const {selectedValue} = this.state;
    return (
      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
        <Picker
          data={data}
          onChange={(option) => {
            console.log(option);
            this.setState({selectedValue: option})
          }}
          label={label}
          height={0.5}
          gradientStyle={gradStyle}
        >
          <Text>{'Please Select!'}</Text>

        </Picker>
        <Text>{selectedValue && selectedValue.length && days[selectedValue[0]].label}</Text>
        <Text>{selectedValue && selectedValue.length && months[selectedValue[1]].label}</Text>
        <Text>{selectedValue && selectedValue.length && years[selectedValue[2]].label}</Text>
      </View>
    );
  }
}