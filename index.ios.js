import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  //style属性内で、width、heightによるサイズの指定 backgroundColorによる背景色の指定
  render(){
    return(
      <View>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
        <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeTutorial', () => FixedDimensionsBasics);
