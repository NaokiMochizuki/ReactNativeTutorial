import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    //SectionListで、ヘッダー付きのリストを表示
    //テーブルヘッダーはrenderSectionHeaderで指定
    return(
      <View style={ styles.container }>
        <SectionList
          sections={[
            { title: 'TableHeaderTitle1', data: ['Devin'] },
            { title: 'TableHeaderTitle2', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
          ]}
          renderItem={ ({ item }) => <Text style={ styles.item }>{ item }</Text> }
          renderSectionHeader={({ section }) => <Text style={ styles.sectionHeader }>{ section.title }</Text> }
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

AppRegistry.registerComponent('ReactNativeTutorial', () => FlatListBasics);
