import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,TouchableOpacity,Animated,Image
} from 'react-native';

const Sliding_Drawer_Width = 350;

export default class App extends Component<{}> {
  constructor()
    {
        super();

        this.Animation = new Animated.Value(0);

        this.Sliding_Drawer_Toggle = true;

    }


    ShowSlidingDrawer = () =>
    {
        if( this.Sliding_Drawer_Toggle === true )
        {
                Animated.timing(
                    this.Animation,
                    {
                        toValue: 1,
                        duration: 500
                    }
                ).start(() =>
                {
                    this.Sliding_Drawer_Toggle = false;
                });

        }
        else
        {
                Animated.timing(
                    this.Animation,
                    {
                        toValue: 0,
                        duration: 500
                    }
                ).start(() =>
                {
                    this.Sliding_Drawer_Toggle = true;
                });
        }
    }

  render(){
    const Animation_Interpolate = this.Animation.interpolate(
      {
          inputRange: [ 0, 1 ],
          outputRange: [ -(Sliding_Drawer_Width - 32), 0 ]
      });

  return(
    <View style={styles.container}>



    <Text style = {styles.TextStyle}>Main page Content or Components Which You Want To Show</Text>


      <Animated.View style = {[ styles.Root_Sliding_Drawer_Container, { transform: [{ translateX: Animation_Interpolate }]}]}>


    <View style = { styles.Main_Sliding_Drawer_Container }>


        <Text style = {{fontSize:20,color:'white'}} >
        Side menu Content
        </Text>

        </View>


    <TouchableOpacity onPress = { this.ShowSlidingDrawer}>

        <Image source={require('./img/icon.png')}  style = {{resizeMode: 'contain', width: 30, height: 30,left:5 }} />

      </TouchableOpacity>


    </Animated.View>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center'

    },

    Root_Sliding_Drawer_Container:
      {
          position: 'absolute',
          flexDirection: 'row',
          left: 0,
          top: 0,
          //top: (Platform.OS == 'ios') ? 20 : 0,
          width: Sliding_Drawer_Width,
          height:'100%'
      },

      Main_Sliding_Drawer_Container:
      {
          flex: 1,
          backgroundColor: 'gray',
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center'
      },

      TextStyle: {

          fontSize: 20,
          padding: 10,
          textAlign: 'center',
          color: 'black'
      }

});
