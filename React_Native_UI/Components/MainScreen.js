import React, { Component } from 'react';
import { View,Text,StyleSheet, Platform } from 'react-native';
import { Icon } from 'native-base';

export default class MainScreen extends Component {
   static navigationOptions = {
     headerLeft: <Icon name='ios-camera' style={{ paddingLeft:10 }}/>,
     title: 'Clone_Instagram',
     headerTitleStyle: {
        textAlign:"center",
        flex:1
    },
     headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
   }
  render() {
    return (
      <View style={styles.container}>
        <Text>Main Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
