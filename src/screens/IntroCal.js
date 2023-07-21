import { StyleSheet, View,Image } from 'react-native'
import React from 'react'

const IntroCal = () => {
  return (
    <View style={styles.container} >
      <Image
        style={styles.img}
        source={require('../../assets/logo1.png')}/>
    </View>
  )
}

export default IntroCal

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'orange'
    }
})