import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../Utils/Colors';
import {TextInput} from 'react-native-paper';
import  { useState } from 'react';
import { RoundedButton } from '../components/RoundedButton';
import {FontSizes} from '../Utils/Sizes'
import {Spacing} from '../Utils/Sizes'

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  console.log(subject)
  return ( 

    <View style = {styles.container}>
      <View style = {styles.inputContainer}>
         <TextInput 
            style={styles.TextInput}
            label = "What would you link to focus on?" 
            onChangeText={setSubject}/> 
                 <View style={styles.button}>
                  <RoundedButton 
                    title='+' size={50} onPress={ () => addSubject(subject)}/>
                 </View>
      </View>
    </View>

);
};

const styles = StyleSheet.create({
  container: {
    
  },
    button: {
     justifyContent: 'center',

    },
   TextInput:{
     flex: 1,
     marginRight: Spacing.sm,
   },

  inputContainer: {
  
   padding: Spacing.lg,
   justifyContent: 'top',
   flexDirection: 'row'
  },

  text: {
    color: colors.white,
  },

  
})