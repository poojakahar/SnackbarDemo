import React, { Component } from 'react';
import { View, Text , Button , Platform } from 'react-native';
import Btn from 'react-native-micro-animated-button';

const colors =
  Platform.OS === 'ios'
    ? {
      blue: '#007aff',
      gray: '#d8d8d8',
      green: '#4cd964',
      red: '#ff3b30',
      white: '#ffffff'
    }
    : {
      blue: '#4285f4',
      gray: '#d8d8d8',
      green: '#0f9d58',
      red: '#db4437',
      white: '#ffffff'
    };

export default class ButtonAnimation extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Btn
          label="Submit"
          onPress={() => this.btn.success()}
          ref={ref => (this.btn = ref)}
          successIcon="check"
        />

        <Btn
          foregroundColor={colors.blue}
          label="Retweet"
          onPress={() => this.b2.success()}
          ref={ref => (this.b2 = ref)}
          successIcon="retweet"
        />

        <Btn
          foregroundColor={colors.red}
          label="Favorite"
          onPress={() => this.b3.success()}
          ref={ref => (this.b3 = ref)}
          successIcon="heart"
        />

        <Btn
          errorBackgroundColor={colors.red}
          errorIcon="thumbs-down"
          expandOnFinish
          foregroundColor={colors.blue}
          label="Am I even?"
          onPress={() =>
            new Date().getSeconds() % 2 === 0 ? this.b4.success() : this.b4.error()
          }
          ref={ref => (this.b4 = ref)}
          successBackgroundColor={colors.green}
          successIcon="thumbs-up"
          width={240}
        />

        <Btn
          errorBackgroundColor={colors.red}
          errorIcon="thumbs-down"
          expandOnFinish
          foregroundColor={colors.blue}
          label="Am I even?"
          onPress={() =>
            new Date().getSeconds() % 4 === 0 ? this.b5.success() : this.b5.error()
          }
          ref={ref => (this.b5 = ref)}
          successBackgroundColor={colors.green}
          successIcon="thumbs-up"
          width={240}
        />
        <Btn
          backgroundColor={colors.blue}
          errorBackgroundColor={colors.red}
          errorForegroundColor={colors.white}
          errorIcon="warning"
          foregroundColor={colors.white}
          label="Simulate an error"
          onPress={() => this.b6.error()}
          ref={ref => (this.b6 = ref)}
          shakeOnError
          width={240}
        />

        <Btn
          backgroundColor={colors.blue}
          foregroundColor={colors.white}
          label="Smile at me"
          onPress={() => this.b7.success()}
          ref={ref => (this.b7 = ref)}
          scaleOnSuccess
          successBackgroundColor={colors.green}
          successForegroundColor={colors.white}
          successIcon="smile-o"
          width={240}
        />
      </View>
    );
  }
}