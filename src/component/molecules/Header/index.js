import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcBack } from '../../../assets'

const Header = ({ title, subtitle, onBack }) => {
   return (
      <View style={styles.container}>
         {
            onBack && (
               <TouchableOpacity activeOpacity={0.7} >
                  <View style={styles.klikkecil}>
                     {/* <IcBack /> */}
                     <Image
                        source={require('../../../assets/Icon/ic-back.png')}
                        style={{ width: 25, height: 25 }}
                     />
                  </View>
               </TouchableOpacity>
            )
         }

         <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
         </View>
      </View>
   )
}

export default Header

const styles = StyleSheet.create({
   klikkecil: {
      padding: 16,
      marginRight: 16,
      marginLeft: -10,
   },
   container: {
      backgroundColor: 'white', paddingHorizontal: 22, paddingBottom: 24, paddingTop: 30, flexDirection: 'row',
      alignItems: 'center',
   },
   title: { fontSize: 22 },
   subtitle: { fontSize: 14, color: '#8d92a3' },
})
