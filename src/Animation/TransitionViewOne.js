import React, { Component } from 'react';
import { View, Text , Button } from 'react-native';

import {
  createTransition,
  FlipX,
  FlipY,
  Fade,
  SlideLeft,
  SlideRight,
  SlideUp,
  SlideDown
} from 'react-native-transition';

import TransitionViewTwo from './TransitionViewTwo'
const Transition = createTransition(SlideRight);

export default class TransitionViewOne extends Component {
  switch = () => {
    Transition.show(
      <TransitionViewTwo/>
    );
  }

  render() {
    return (
      <Transition>
        <View style={{ flex: 1, alignItems: 'center' , justifyContent: 'center' , backgroundColor: '#0820ff' }}>
          <Text>This is Second View</Text>
          <Button title="Press to Switch" onPress={this.switch} />
        </View>
      </Transition>
    );
  }
}