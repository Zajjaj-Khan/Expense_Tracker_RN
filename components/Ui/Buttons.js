import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Children } from 'react/cjs/react.production.min'
import { GlobalStyles } from '../../constants/styles'

const Buttons = ({children,onPress,mode,style}) => {
  return (
    <View style={style}>
      <Pressable  onPress={onPress} style={({pressed})=> pressed && styles.pressed} >
        <View style={[styles.button,mode== 'flat' && styles.flat,style]}>
            <Text style={[styles.button,mode=='flat' && styles.flatText,style]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({
    button:{
        borderRadius:4,
        padding:4,
        backgroundColor: GlobalStyles.colors.primary500
    },
    flat:{
        backgroundColor:'transparent',
    },
    buttonText:{
        color:'white',
        textAlign:'center',
    },
    flatText:{
        color:GlobalStyles.colors.primary200,
    },
    pressed:{
        opacity:0.75,
        backgroundColor:GlobalStyles.colors.primary100,
        borderRadius:4,

    }


})