import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Vector } from '../../assets';


const SplashScreen = ({ navigation }) => {
   useEffect(() => {
      setTimeout(() => {
         navigation.replace('SignIn');
      }, 3000);
   }, [])
   return (
      <View style={{ backgroundColor: '#FFC700', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <View style={{ height: 20 }}></View>
         <Text style={{ fontSize: 25 }}>Tugas Mobile Programming</Text>
      </View>
   );
}
export default SplashScreen;