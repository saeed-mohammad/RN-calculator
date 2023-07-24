import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const Keypad = ({val,setVal}) => {
  const [bracket,setBracket]=useState(true)
  const handleKey=(e)=>{
    switch(e){
      case 'AC':
        setVal('0')
        break;
        case '()':
          if(bracket == true ){
            setVal(val+'(')
            setBracket(!bracket)
          }else{
            setVal(val+')')
            setBracket(!bracket)
          }
        break;

        case '%' || '/' || '*' || '+' || '-' || '.':
          setVal(val+e)
        break;
        case '=':
          try {
            setVal(eval(val))
          } catch (error) {
            setVal('Format Error')
          }
        break;
        case '^':
          setVal(val.slice(0,-1))
        break;
        default:
          if(val == '0'){
              setVal(e)
            }
            else{
              if(val=='Format Error'){
                setVal(e)
              }
              else{
                setVal(val+e)

                // partially working
                // 2-+ => 2+2 working
                // if result 4+ => return error
                // if result 44+1 => working
                // 
                // if(isNaN(e)){

                //   if(val.slice(-1)=='+' || val.slice(-1)=='-' ||
                //   val.slice(-1)=='*' || val.slice(-1)=='/' ||
                //   val.slice(-1)=='%' || val.slice(-1)=='.'
                //     ){
                //     setVal(val.slice(0,-1)+e)
                //   }else{
                //     setVal(val+e)
                //   }

                // }else{
                //   setVal(val+e)
                // }
              }
            }

    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
         style={styles.btn1}
         onPress={()=>handleKey('AC')}>
          <Text style={styles.btnTxt}>AC</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.btn1}
        onPress={()=>handleKey('()')}>
          <Text style={styles.btnTxt}>( )</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}
         onPress={()=>handleKey('%')}>
          <Text style={styles.btnTxt}>%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}
         onPress={()=>handleKey('/')}>
          <Text style={styles.btnTxt}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn1}  onPress={()=>handleKey('7')}>
          <Text style={styles.btnTxt}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}  onPress={()=>handleKey('8')}>
          <Text style={styles.btnTxt}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}  onPress={()=>handleKey('9')}>
          <Text style={styles.btnTxt}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}  onPress={()=>handleKey('*')}>
          <Text style={styles.btnTxt}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn1}  onPress={()=>handleKey('4')}>
          <Text style={styles.btnTxt}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}  onPress={()=>handleKey('5')}>
          <Text style={styles.btnTxt}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}  onPress={()=>handleKey('6')}>
          <Text style={styles.btnTxt}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}  onPress={()=>handleKey('-')}>
          <Text style={styles.btnTxt}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn1}  onPress={()=>handleKey('1')}>
          <Text style={styles.btnTxt}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}  onPress={()=>handleKey('2')}>
          <Text style={styles.btnTxt}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}  onPress={()=>handleKey('3')}>
          <Text style={styles.btnTxt}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}  onPress={()=>handleKey('+')}>
          <Text style={styles.btnTxt}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn1} onPress={()=>handleKey('0')} >
          <Text style={styles.btnTxt}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1} onPress={()=>handleKey('.')}>
          <Text style={styles.btnTxt}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1} onPress={()=>handleKey('^')}>
          <Text style={styles.btnTxt}> {`<`} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1} onPress={()=>handleKey('=')}>
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