import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../component'

const SignUp = () => {
   return (
      <View style={{ flex: 1 }}>
         <Header title="Sign Up" onBack={() => { }} subtitle="Create Your Account" />
         <View style={styles.container}>
            <View style={styles.poto}>
               <View style={styles.borderpoto}>
                  <View style={styles.garis}>
                     <Text style={styles.addphoto}>Add Photo</Text>
                  </View>
               </View>
            </View>
            <TextInput label="Your Email" inputdia="Entry Your Email" />
            <Gap height={16} />
            <TextInput label="Your Password" inputdia="Entry Your Password" />
            <Gap height={16} />
            <TextInput label="Full Name" inputdia="Entry Your FullName" />
            <Gap height={16} />
            <Button text="Continue" textColor="white" color="#2F4F4F" onPress={() => navigation.navigate('SignUp')} />
         </View>
      </View>
   )
}

export default SignUp

const styles = StyleSheet.create({
   pages: {
      flex: 1,
   },
   container: { paddingHorizontal: 24, paddingVertical: 26, marginTop: 20, flex: 1, backgroundColor: 'white' },
   addphoto: {
      fontSize: 15, textAlign: 'center'
   },
   garis: {
      padding: 20,
      backgroundColor: 'gray',
      width: 90,
      height: 90,
      borderRadius: 90
   },
   borderpoto: {
      borderWidth: 1,
      height: 110,
      width: 110,
      borderRadius: 110,
      borderStyle: 'dashed',
      borderColor: 'gray',
      justifyContent: 'center',
      alignItems: 'center'
   },
   poto: {
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 10
   }
})

