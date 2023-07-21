import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import Display from '../components/display/Display'
import Keypad from '../components/keypad/Keypad'

const Calculator = () => {
  return (
    <View style={styles.container}>
      <Display/>
      <Keypad/>
    </View>
  )
}

export default Calculator

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#eee'
    }
})