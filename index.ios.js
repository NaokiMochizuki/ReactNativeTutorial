import React, { Component } from 'react';
import { AppRegistry, Alert, Platform, StyleSheet, Text, TouchableHighlight,
  TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  render() {
    return(
      <View style={ styles.container }>
        //TouchableHighlightで、既存viewに階層を重ねる形で新たなviewを生成
        <TouchableHighlight onPress={ this._onPressButton } underlayColor='white'>
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        //TouchableOpacityで、既存viewを書き換える形でタップ後の画面を生成
        <TouchableOpacity onPress={ this._onPressButton }>
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        //TouchableNativeFeedbackはAndroidのみ使用可能
        <TouchableNativeFeedback
          onPress={ this._onPressButton }
          background={ Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : '' }>
          <View style={ styles.button }>
            <Text style={ styles.button }>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        //onLongPressで長押しされた際のアクションを定義出来る
        <TouchableHighlight onPress={ this._onPressButton } onLongPress={ this._onLongPressButton } underlayColor='white'>
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})

AppRegistry.registerComponent('ReactNativeTutorial', () => Touchables);
