import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Ejercicio9 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxPurple}></View>
      <View style={styles.boxOrange}></View>
      <View style = {styles.boxYellow}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#7fb3d5',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    boxPurple:{
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderWidth: 5,
        borderColor: 'white',

        
    },
    
    boxOrange:{
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 5,
        borderColor: 'white',
        top: 50,
    },

    boxYellow:{
        width: 100,
        height: 100,
        backgroundColor: 'yellow',
        borderWidth: 5,
        borderColor: 'white',

    }
})
