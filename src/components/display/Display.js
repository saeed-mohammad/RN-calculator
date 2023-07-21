import { ScrollView, StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react' 

const Display = () => {
  return (
    <View style={styles.container}>
        <ScrollView >
            <Text style={styles.inp}>1234</Text>
        </ScrollView>
    </View>
  )
}

export default Display

const styles = StyleSheet.create({
  container:{
    // borderWidth:1,
    margin:10,
    elevation:5,
    padding:10,
    height:200,
    shadowColor:'black',
    backgroundColor:'white',
    height:'30%'
  },
  inp:{
    textAlign:'right',
    padding:10,
    fontSize:38,
    fontWeight:'600',
    color:'black',
    letterSpacing:2
  }
})