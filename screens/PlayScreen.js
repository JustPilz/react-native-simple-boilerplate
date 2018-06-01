import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackgroundImage from '@Components/BackgroundImage/BackgroundImage';

export default class PlayScreen extends React.Component {

  static navigationOptions = {
    title: 'PlayScreen'
  };

  render() {
    return (
      <View style={container}>
        <BackgroundImage>
          <Text style={text}>Текст</Text>
        </BackgroundImage>
      </View>
    );
  }
}

const {
  container,
  text
} = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
});
