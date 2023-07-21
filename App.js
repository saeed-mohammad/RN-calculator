import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Calculator from './src/screens/Calculator'
import IntroCal from './src/screens/IntroCal'

const App = () => {
  useEffect(()=>{Timer()},[])
  const [load,setLoad]=useState(true)
// timer for logo...
  const Timer=()=>{
    setTimeout(()=>{setLoad(false)},200)
  }
  return (
    <View style={styles.container}>
      {load?(
        <IntroCal/> 
      ):(
        <Calculator/>
      )}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})