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

//const Transition = createTransition(Fade);
let Transition = createTransition(SlideUp);

export default class TransitionViewOne extends Component {
  switch = (t) => {
    Transition.show(
      <View style={{ flex: 1, alignItems: 'center' , justifyContent: 'center' , backgroundColor: '#beff14' }}>
        <Text>This is Third view</Text>
      </View>
    );
  }

  render() {
    return (
      <Transition>
        <View style={{ flex: 1, alignItems: 'center' , justifyContent: 'center' , backgroundColor: '#09c9ff' }}>
          <Text>This is Second View</Text>
          <Button title="Press to Switch" onPress={this.switch} />
        </View>
      </Transition>
    );
  }
}