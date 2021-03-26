import React, { Component } from 'react';
import { Alert, Button, View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import Header from '../../component/molecules/Header';

// contoh State Full Component reaxt native
class Tugas extends Component {

   // Ini Adlah Alert Nya Function Alert
   threeOptionAlert = () => {
      Alert.alert(
         'Apa Anda Ingin Memesan Masker Ini??',
         'Silakan Tekan Beli Atau Batal?',
         [
            { text: 'Add To Cart', onPress: () => console.log('Masukan Keranjang') },
            { text: 'Beli', onPress: () => console.log('Beli') },
            { text: 'Batal', onPress: () => console.log('Batal') },
         ],
         { cancelable: true }
      );
   }

   render() {
      return (
         <View style={styles.container}>
            <Header title="Tugas Pemerograman Mobile" subtitle="Erlangga" onBack={() => { }} />
            <View style={styles.card}>
               <ScrollView horizontal>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                     <Image
                        source={require('../../assets/Icon/masker.jpg')}
                        style={{ width: 200, height: 200 }}
                     />
                     <Text style={{ fontSize: 17 }}>Masker Sensian</Text>
                     <Text>IDR : 25K/Pcs</Text>
                     <View style={styles.bintang}>
                        <Image
                           source={require('../../assets/Icon/bintang.png')}
                           style={{ width: 15, height: 15 }}
                        />
                        <Image
                           source={require('../../assets/Icon/bintang.png')}
                           style={{ width: 15, height: 15 }}
                        />
                        <Image
                           source={require('../../assets/Icon/bintang.png')}
                           style={{ width: 15, height: 15 }}
                        />
                        <Image
                           source={require('../../assets/Icon/bintang.png')}
                           style={{ width: 15, height: 15 }}
                        />
                     </View>
                     <View style={{ padding: 20, }}>
                        <Button title='CheckOut' onPress={this.threeOptionAlert} />
                     </View>
                  </View>
                  <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 40 }}>
                     <Image
                        source={require('../../assets/Icon/apd.jpg')}
                        style={{ width: 200, height: 200 }}
                     />
                     <Text style={{ fontSize: 17 }}>Baju APD</Text>
                     <Text>IDR : 205K/Pcs</Text>
                     <View style={styles.bintang}>
                        <Image
                           source={require('../../assets/Icon/bintang.png')}
                           style={{ width: 15, height: 15 }}
                        />
                        <Image
                           source={require('../../assets/Icon/bintang.png')}
                           style={{ width: 15, height: 15 }}
                        />
                        <Image
                           source={require('../../assets/Icon/bintang.png')}
                           style={{ width: 15, height: 15 }}
                        />
                        <Image
                           source={require('../../assets/Icon/bintang.png')}
                           style={{ width: 15, height: 15 }}
                        />
                     </View>
                     <View style={{ padding: 20, }}>
                        <Button title='CheckOut' onPress={this.threeOptionAlert} />
                     </View>
                  </View>
                  <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 40 }}>
                     <Image
                        source={require('../../assets/Icon/han.jpg')}
                        style={{ width: 200, height: 200 }}
                     />
                     <Text style={{ fontSize: 17 }}>Handscoon Steril</Text>
                     <Text>IDR : 25K/Pcs</Text>
                     <View style={styles.bintang}>
                        <Image
                           source={require('../../assets/Icon/bintang.png')}
                           style={{ width: 15, height: 15 }}
                        />
                        <Image
                           source={require('../../assets/Icon/bintang.png')}
                           style={{ width: 15, height: 15 }}
                        />
                        <Image
                           source={require('../../assets/Icon/bintang.png')}
                           style={{ width: 15, height: 15 }}
                        />
                        <Image
                           source={require('../../assets/Icon/bintang.png')}
                           style={{ width: 15, height: 15 }}
                        />
                     </View>
                     <View style={{ padding: 20, }}>
                        <Button title='CheckOut' onPress={this.threeOptionAlert} />
                     </View>
                  </View>
                  <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 40 }}>
                     <Image
                        source={require('../../assets/Icon/sani.jpg')}
                        style={{ width: 200, height: 200 }}
                     />
                     <Text style={{ fontSize: 17 }}>Handsanitaizer</Text>
                     <Text>IDR : 25K/Pcs</Text>
                     <View style={styles.bintang}>
                        <Image
                           source={require('../../assets/Icon/bintang.png')}
                           style={{ width: 15, height: 15 }}
                        />
                        <Image
                           source={require('../../assets/Icon/bintang.png')}
                           style={{ width: 15, height: 15 }}
                        />
                        <Image
                           source={require('../../assets/Icon/bintang.png')}
                           style={{ width: 15, height: 15 }}
                        />
                        <Image
                           source={require('../../assets/Icon/bintang.png')}
                           style={{ width: 15, height: 15 }}
                        />
                     </View>
                     <View style={{ padding: 20, }}>
                        <Button title='CheckOut' onPress={this.threeOptionAlert} />
                     </View>
                  </View>
               </ScrollView>
            </View>
            <View style={{ textAlign: 'center', paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
               <Text style={{ fontSize: 30 }}>Tugas Menampilkan Alert</Text>
            </View>
         </View>
      );
   }
}
const styles = StyleSheet.create({
   card: {
      paddingLeft: 20,
      flexDirection: 'row',
      paddingTop: 20,
      backgroundColor: 'white'
   },
   bintang: {
      flexDirection: 'row'
   }
});
export default Tugas