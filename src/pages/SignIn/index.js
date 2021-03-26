import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../component'

const SignIn = ({ navigation }) => {
   return (
      <View style={styles.pages}>
         <Header title="Tugas Mobile Programming" subtitle="Erlangga" />
         <View style={styles.container}>
            <TextInput label="Your Email" inputdia="Entry Your Email" />
            <Gap height={16} />
            <TextInput label="Your Password" inputdia="Entry Your Password" />
            <Gap height={16} />
            <Button text="Sign In" textColor="white" color="#008080" />
            <Gap height={16} />
            <Button text="Create New Account" textColor="white" color="#2F4F4F" onPress={() => navigation.navigate('Tugas')} />
         </View>
      </View>
   )
}

export default SignIn

const styles = StyleSheet.create({
   pages: {
      flex: 1,
   },
   container: { paddingHorizontal: 24, paddingVertical: 26, marginTop: 20, flex: 1, backgroundColor: 'white' }
})
