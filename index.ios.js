import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    return(
      //ScrollViewでスクロール表示の作成
      <ScrollView>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Image source={ require('./img/favicon.png') } />
        <Image source={ require('./img/favicon.png') } />
        <Image source={ require('./img/favicon.png') } />
        <Image source={ require('./img/favicon.png') } />
        <Text style={{ fontSize: 96 }}>Scroll down</Text>
        <Image source={ require('./img/favicon.png') } />
        <Image source={ require('./img/favicon.png') } />
        <Image source={ require('./img/favicon.png') } />
        <Image source={ require('./img/favicon.png') } />
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('ReactNativeTutorial', () => IScrolledDownAndWhatHappenedNextShockedMe);
