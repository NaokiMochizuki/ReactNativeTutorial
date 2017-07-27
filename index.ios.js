import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    //1秒ごとにsetStateでstateの値を書き換える処理
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{ display }</Text>
    );
  }
}


AppRegistry.registerComponent('ReactNativeTutorial', () => BlinkApp);
