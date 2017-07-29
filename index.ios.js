import React, { Component } from 'react';
import { AppRegistry, ActivityIndicator, ListView, Text, View } from 'react-native';

export default class Movies extends Component {
  constructor(props){
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    //fetch('URL')でリクエストを投げて情報を取得
    //cloneWithRowsで、fetchの返り値からkeyがmoviesのハッシュをコピーしてdataSourceにつっこんでる
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        //DataSourceにrowが変わったかどうかのbooleanをつっこんでる
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
        }, function() {
          //setStateした上で何かメソッドチェーンさせるならここに書く
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(){
    //fetchで通信が終わるまで(isLoadingがfalseになるまで)の間、ActivityIndicatorで読み込み中のくるくる表示
    if(this.state.isLoading){
      return(
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return(
      <View style={{ flex: 1, paddingTop: 20 }}>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ (rowData) => <Text>{ rowData.title }, { rowData.releaseYear }</Text> }
        />
      </View>
    );
  }
}
AppRegistry.registerComponent('ReactNativeTutorial', () => Movies);
