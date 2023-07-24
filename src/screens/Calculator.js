import { StyleSheet, Text, View ,Image} from 'react-native'
import React, { useState } from 'react'
import Display from '../components/display/Display'
import Keypad from '../components/keypad/Keypad'

const Calculator = () => {
  const [val,setVal]=useState('0')
  return (
    <View style={styles.container}>
      <Display val={val} setVal={setVal}/>
      <Keypad val={val} setVal={setVal}/>
    </View>
  )
}

export default Calculator

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#eee'
    }
})