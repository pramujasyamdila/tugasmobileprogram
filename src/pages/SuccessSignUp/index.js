import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button, Gap } from '../../component'

const SuccessSignUp = ({ navigation }) => {
   return (
      <View style={styles.page}>
         <Image
            source={require('../../assets/Ilustration/SignSucces.png')}
            style={{ width: 200, height: 300 }}
         />
         <Gap height={16} />
         <Text style={styles.title}>Your Success To Sign Up</Text>
         <Text style={{ color: 'wheat' }}>Now you are able to order
           </Text>
         <Text style={{ color: 'wheat' }}>
            some foods as a self-reward</Text>
         <Gap height={16} />
         <Button text="Find Your Destination" textColor="white" color="#2F4F4F" onPress={() => navigation.replace('MainApp')} />
      </View>
   )
}

export default SuccessSignUp;

const styles = StyleSheet.create({
   page: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#008080',
      alignItems: 'center'
   },
   title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white'
   }
})
