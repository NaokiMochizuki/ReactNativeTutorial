import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
  //styleで配列を渡す場合、一番最後の値が採用される
  render(){
    return(
      <View>
        <Text style={ styles.red }>just red</Text>
        <Text style={ styles.bigblue }>just bigblue</Text>
        <Text style={ [styles.bigblue, styles.red] }>bigblue, then red</Text>
        <Text style={ [styles.red, styles.bigblue] }>red, then bigblue</Text>
      </View>
    );
  }
}

//style属性で呼び出すStyleSheetを、stylesという名前で定義
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('ReactNativeTutorial', () => LotsOfStyles);
