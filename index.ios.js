import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDirectionBasics extends Component {
  render(){
    return(
      //flexDirectionをrowとcolumnで切り替えることで、縦横の並びを変更出来る
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ width: 50, height: 50,  backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeTutorial', () => FlexDirectionBasics);
