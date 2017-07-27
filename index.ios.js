import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class AlignItemsBasics extends Component {
  render(){
    return(
      //alignItemsで二軸目(row or columnの内、flexDirectionに指定されていない方)の位置関係を指定
      //flex-start、center、flex-end、stretch等が取れる
      //stretchの場合は、子要素にwidth属性を持たせてはいけない
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
        <View style={{ width: 50, height: 50,  backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeTutorial', () => AlignItemsBasics);
