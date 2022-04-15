import React , {useState} from 'react';
import {View, Text, StyleSheet, Vibration} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {colors} from '../Utils/Colors';
import {Countdown} from '../components/CountDown';
import {RoundedButton} from '../components/RoundedButton';
import {Spacing, FontSizes } from '../Utils/Sizes'
import {Timing} from './Timing';
import { useKeepAwake } from 'expo-keep-awake';


const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];


export const Timer = ({focusSubject, clearSubject,onTimerEnd}) =>  {
  useKeepAwake();
const [isStarted, setIsStarted] = useState(false);
const [progress, setProgress] = useState(1);
const [minutes, setMinutes] = useState(0.1);


const onEnd = (reset) => {
 Vibration.vibrate(PATTERN);
 setIsStarted(false); 
 setProgress(1);
 reset();
 onTimerEnd(focusSubject);
}



  return (


<View style= {styles.container}>
    <View style= {styles.countDown}>
          <Countdown 
                     minutes={minutes}
                     isPaused={!isStarted}
                     onProgress= {setProgress}
                     onEnd= {onEnd}
                     
          />

          <View style = {{padding: Spacing.xxl}} >
            <Text style= {styles.title}>Focusing on:</Text>
            <Text style= {styles.task}>{focusSubject}</Text>
         </View>
    </View>

        
         <View style={{paddingTop: Spacing.sm }}>
            <ProgressBar
              progress={progress}
              color= {colors.ProgressBar}
              style= {{height: Spacing.sm}}
            />
         </View>

              <View style = {styles.timingWrapper}>
                <Timing onChangeTime={setMinutes} />
              </View>

      <View style = {styles.buttonWrapper}> 

        {!isStarted ? (
         <RoundedButton title= 'start' onPress={() => setIsStarted(true)}/> 
        ) : ( 
          <RoundedButton title= 'Pause' onPress={() => setIsStarted(false)}/> 
        )}
      </View>

      <View style = {styles.clearSubjectWrapper}>
      <RoundedButton 
          title= '-'
          onPress={clearSubject}
          size= {50}
          />
          </View>
      
</View>


)
} 

const styles= StyleSheet.create ({

  container:  {
    flex: 1,
  },

  countDown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    
  },


timingWrapper: {
 flex: 0.1,
 padding: Spacing.md,
 flexDirection: 'row',
},


 buttonWrapper: {
   flex: 0.3,
   flexDirection: 'row',
   paddingTop: Spacing.xxl,
   justifyContent: 'center',
   alignItems: 'center',
  
 },

clearSubjectWrapper: {
  flexDirection: 'row',
  justifyContent: 'center',

},

 title: {
  color: colors.white,
  fontWeight: 'bold',
  textAlign: 'center',
 },

 task: {
    color: colors.white,
    textAlign: 'center',
 },


})