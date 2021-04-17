import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';

const Select = ({ label }) => {
   return (
      <View>
         <Text style={styles.label}>{label}</Text>
         <View style={styles.inputan}>

            <Picker style={{ height: 50, width: 340 }}
            // selectedValue={selectedLanguage}
            // onValueChange={(itemValue, itemIndex) =>
            //    setSelectedLanguage(itemValue)}
            >
               <Picker.Item label="Java" value="java" />
               <Picker.Item label="JavaScript" value="js" />
            </Picker>
         </View>
      </View>
   )
}

export default Select

const styles = StyleSheet.create({
   label: {
      fontSize: 16,
   },
   inputan: {
      borderWidth: 1, borderColor: 'black', borderRadius: 8, padding: 2, marginBottom: 10
   }
})
