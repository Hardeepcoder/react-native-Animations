/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Animated
} from 'react-native';



export default class App extends Component<{}> {
  constructor()
    {
        super();

        this.animatedValue = new Animated.Value(0);
    }

    animateBackgroundColor = () =>
    {
        this.animatedValue.setValue(0);
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 12000
            }
        ).start(() => { this.animateBackgroundColor() });
    }

    componentDidMount()
    {
        this.animateBackgroundColor();
    }
  render() {
    const backgroundColorVar = this.animatedValue.interpolate(
        {
            inputRange: [ 0, 0.5, 1],
            outputRange: [ 'magenta', 'red', 'yellow']
        });

        return(
            <Animated.View style = {[ styles.container, { backgroundColor: backgroundColorVar } ]}>
                <Text style = { styles.text }>Animated </Text>
            </Animated.View>
        );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
