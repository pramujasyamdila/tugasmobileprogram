import React from 'react'
import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'

const TextInput = ({ label, inputdia }) => {
   return (
      <View>
         <Text style={styles.label}>{label}</Text>
         <TextInputRN style={styles.inputan} placeholder={inputdia}></TextInputRN>
      </View>
   )
}

export default TextInput

const styles = StyleSheet.create({
   label: {
      fontSize: 16,
   },
   inputan: {
      borderWidth: 1, borderColor: 'black', borderRadius: 10, padding: 10, paddingHorizontal: 20
   }
})
