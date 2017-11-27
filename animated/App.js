import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,TouchableOpacity,Animated,ScrollView
} from 'react-native';


export default class App extends Component<{}> {
constructor(){
  super();
  this.index =0;
  this.state = {valueArray:[]}
  this.animtedValue = new Animated.Value(0);

}
addRow= ()=>{
  //alert("clicked");
  this.animtedValue.setValue(0);
  let newAdd = {index: this.index}
  this.setState({valueArray:[...this.state.valueArray,newAdd]},()=>{
    //update animation
    Animated.timing(
      this.animtedValue,{
        toValue: 1,
        duration:500,
        useNativeDriver: true
      }).start(()=>{
        //when animation will run
        this.index = this.index +1;
      });

  });
}
  render(){
    const animtedPower = this.animtedValue.interpolate({
      //put your values for animation
      inputRange:[0,1],
      outputRange:[-70,0]
    });

    let rows = this.state.valueArray.map((item,key)=>{
      if((key) == this.index){
        return(
          <Animated.View key={key} style={{
            backgroundColor:'black', margin:10, padding:10
          , transform:[{translateX:animtedPower }] }}>
            <Text style={{color:'white'}}> row {item.index}</Text>
          </Animated.View>
        );
      }else{
        return(
          <View key={key} style={{
            backgroundColor:'black', margin:10, padding:10
          }}>
          <Text style={{color:'white'}}> row {item.index}</Text>
          </View>
        );
      }

    });


  return(
    <View style={styles.container}>
    <ScrollView>
    <View>
    {
      rows
    }
    </View>
    </ScrollView>

    <TouchableOpacity style={styles.btn}
    onPress={this.addRow}>
    <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container:
    {
      flex: 1,
      justifyContent: 'center',
      //alignItems:'center'

    },
btn:{
  position:'absolute',
  width:50,height:50,
  backgroundColor:'green',
  borderRadius:30,
  bottom:10,right:10,
  alignItems:'center',
  justifyContent:'center'
},
plus:{
  color:'white',
  fontSize:25
}


});
