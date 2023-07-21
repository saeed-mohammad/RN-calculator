import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
const Keypad = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnTxt}>AC</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnTxt}>( )</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnTxt}>%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnTxt}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnTxt}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnTxt}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnTxt}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnTxt}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnTxt}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnTxt}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnTxt}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnTxt}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnTxt}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnTxt}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnTxt}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnTxt}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnTxt}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnTxt}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnTxt}>=</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Keypad

const styles = StyleSheet.create({
  container:{
    // borderWidth:1,
    height:'70%',
  },
  row:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:20,
    marginBottom:20
  },
  btn1:{
    backgroundColor:'white',
    paddingHorizontal:25,
    paddingVertical:20,
    borderRadius:10,
    elevation:10
  },
  btnTxt:{
    color:'black',
    fontSize:30,
  }
})