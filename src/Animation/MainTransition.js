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
import TransitionViewOne from './TransitionViewOne'

const Transition = createTransition(SlideLeft);

export default class MainTransition extends Component {
  switch = () => {
    Transition.show(
      <TransitionViewOne/>
    );
  }

  render() {
    return (
      <Transition>
        <View style={{ flex: 1, alignItems: 'center' , justifyContent: 'center' , backgroundColor: '#f0063d' }}>
          <Text>This the initial View</Text>
          <Button title="Press to Switch" onPress={this.switch} />
        </View>
      </Transition>
    );
  }
}