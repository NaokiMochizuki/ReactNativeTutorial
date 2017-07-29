import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    return(
      //ScrollViewでスクロール表示の作成
      //paginateEnabledで、ページ単位での移動(スクロール)をするかどうか指定
      //horizontalで、横方向のスクロール表示にするかどうか指定
      <ScrollView pagingEnabled={ true } horizontal={ true }>
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
