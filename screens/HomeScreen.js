import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import BackgroundImage from '@Components/BackgroundImage/BackgroundImage';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home Screen'
  };

  render() {
    return (
      <View style={container}>
        <BackgroundImage>
          <Button
            title="PLAY"
            onPress={() => {
              this.props.navigation.navigate('Play')}
            }
          />
        </BackgroundImage>
      </View>
    );
  }
}

const {
  container
} = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
