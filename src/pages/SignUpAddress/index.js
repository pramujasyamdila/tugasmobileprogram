import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Select, TextInput } from '../../component'

const SignUpAddress = ({ navigation }) => {
   return (
      <View style={{ flex: 1 }}>
         <Header title="Sign Up Address" onBack={() => { }} subtitle="Create Your Address" />
         <View style={styles.container}>
            <TextInput label="Phone Number" inputdia="Phone Number" />
            <Gap height={16} />
            <TextInput label="Address" inputdia="Entry Your Address" />
            <Gap height={16} />
            <TextInput label="House No." inputdia="Entry Number House" />
            <Gap height={16} />
            <TextInput label="" inputdia="Entry Your FullName" />
            <Gap height={16} />
            <Select label="City" />
            <Button text="SignUp" textColor="white" color="#2F4F4F" onPress={() => navigation.replace('SuccessSignUp')} />
         </View>
      </View>
   )
}

export default SignUpAddress

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
