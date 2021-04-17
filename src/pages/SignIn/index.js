import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../component'

const SignIn = ({ navigation }) => {
   return (
      <ScrollView>
         <View style={{ flex: 1 }}>
            <View style={styles.pages}>
               <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')}>
                  <View style={{ flexDirection: 'row', backgroundColor: 'gray', }}>
                     <View style={styles.onback}>
                        <View style={styles.bungkusdia}>
                           <Image
                              source={require('../../assets/Icon/ic-back.png')}
                              style={{ width: 39, height: 25 }}
                           />
                        </View>
                     </View>
                     <View style={{ justifyContent: 'center', marginHorizontal: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, marginTop: 7, color: 'white' }}>Choice Your Book </Text>
                        <Image
                           source={require('../../assets/Icon/angga.png')}
                           style={{ width: 100, height: 50, marginTop: 3, position: 'relative', marginRight: 7, marginBottom: 3 }}
                        />
                     </View>
                  </View>
               </TouchableOpacity>

               <View style={{ marginTop: -10, position: 'relative', }}>
                  <Image
                     source={require('../../assets/Icon/angga2.png')}
                     style={{ width: 400, height: 400, position: 'relative', }}
                  />
                  <View style={{ position: 'absolute', }}><Text style={{ fontSize: 30, textShadowColor: 'yellow', marginLeft: 60, marginTop: 30, color: 'white' }}>Free Book To Reading</Text></View>
               </View>
               <ScrollView style={{ marginTop: -300 }} horizontal>
                  <View style={{ backgroundColor: 'white', marginRight: 20, borderRadius: 10, marginLeft: 10, paddingBottom: 10, paddingHorizontal: 10 }}>
                     <Image
                        source={require('../../assets/Icon/buku5.jpg')}
                        style={{ width: 120, height: 170 }}
                     />
                     <View style={{ alignItems: 'center' }}>
                        <Text>IDR : 35K</Text>
                        <Text>Nasional</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Text1')}>
                           <View style={{ backgroundColor: 'green', width: 100, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}><Text style={{ color: 'white' }}>BACA</Text></View>
                        </TouchableOpacity>
                     </View>
                  </View>
                  <View style={{ backgroundColor: 'white', marginRight: 20, borderRadius: 10, marginLeft: 10, paddingBottom: 10, paddingHorizontal: 10 }}>
                     <Image
                        source={require('../../assets/Icon/premium4.jpg')}
                        style={{ width: 120, height: 170 }}
                     />
                     <View style={{ alignItems: 'center' }}>
                        <Text>IDR : 35K</Text>
                        <Text>Nasional</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Text2')}>
                           <View style={{ backgroundColor: 'green', width: 100, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}><Text style={{ color: 'white' }}>BACA</Text></View>
                        </TouchableOpacity>
                     </View>
                  </View>
                  <View style={{ backgroundColor: 'white', marginRight: 20, borderRadius: 10, marginLeft: 10, paddingBottom: 10, paddingHorizontal: 10 }}>
                     <Image
                        source={require('../../assets/Icon/preium3.jpg')}
                        style={{ width: 120, height: 170 }}
                     />
                     <View style={{ alignItems: 'center' }}>
                        <Text>IDR : 35K</Text>
                        <Text>Nasional</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Text3')}>
                           <View style={{ backgroundColor: 'green', width: 100, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}><Text style={{ color: 'white' }}>BACA</Text></View>
                        </TouchableOpacity>
                     </View>
                  </View>
                  <View style={{ backgroundColor: 'white', marginRight: 20, borderRadius: 10, marginLeft: 10, paddingBottom: 10, paddingHorizontal: 10 }}>
                     <Image
                        source={require('../../assets/Icon/buku5.jpg')}
                        style={{ width: 120, height: 170 }}
                     />
                     <View style={{ alignItems: 'center' }}>
                        <Text>IDR : 35K</Text>
                        <Text>Nasional</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')}>
                           <View style={{ backgroundColor: 'green', width: 100, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}><Text style={{ color: 'white' }}>BACA</Text></View>
                        </TouchableOpacity>
                     </View>
                  </View>
               </ScrollView>
               {/* <View style={styles.container}>
            <TextInput label="Your Email" inputdia="Entry Your Email" />
            <Gap height={16} />
            <TextInput label="Your Password" inputdia="Entry Your Password" />
            <Gap height={16} />
            <Button text="Sign In" textColor="white" color="#008080" />
            <Gap height={16} />
            <Button text="Create New Account" textColor="white" color="#2F4F4F" onPress={() => navigation.navigate('SignUp')} />
         </View> */}

               <View style={{ flex: 15, position: 'relative', backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: 15 }}>

                  <View style={{ marginLeft: 10, marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                     <Image
                        source={require('../../assets/Icon/premium.png')}
                        style={{ width: 80, height: 50 }}
                     />
                     <Text style={{ fontSize: 20, fontFamily: 'arial', fontWeight: 'bold' }}>Get Premium</Text>
                  </View>
                  <ScrollView style={{ marginBottom: 20 }} horizontal>
                     <View style={{ backgroundColor: 'white', justifyContent: 'center', marginTop: 10, marginRight: 20, borderRadius: 10, marginLeft: 10, paddingBottom: 1, paddingHorizontal: 10 }}>
                        <Image
                           source={require('../../assets/Icon/senja.jpg')}
                           style={{ width: 130, marginTop: 10, height: 150 }}
                        />
                        <View style={{ marginTop: 10, }}>
                           <Image
                              source={require('../../assets/Icon/bintang.png')}
                              style={{ width: 70, height: 30 }}
                           />
                           <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')}>
                              <View style={{ backgroundColor: 'yellow', width: 100, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}><Text style={{ color: 'black' }}>BELI</Text></View>
                           </TouchableOpacity>
                        </View>
                     </View>

                     <View style={{ backgroundColor: 'white', justifyContent: 'center', marginTop: 10, marginRight: 20, borderRadius: 10, marginLeft: 10, paddingBottom: 1, paddingHorizontal: 10 }}>
                        <Image
                           source={require('../../assets/Icon/pemimpi.jpg')}
                           style={{ width: 130, marginTop: 10, height: 150 }}
                        />
                        <View style={{ marginTop: 10, }}>
                           <Image
                              source={require('../../assets/Icon/bintang.png')}
                              style={{ width: 70, height: 30 }}
                           />
                           <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')}>
                              <View style={{ backgroundColor: 'yellow', width: 100, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}><Text style={{ color: 'black' }}>BELI</Text></View>
                           </TouchableOpacity>
                        </View>
                     </View>

                     <View style={{ backgroundColor: 'white', justifyContent: 'center', marginTop: 10, marginRight: 20, borderRadius: 10, marginLeft: 10, paddingBottom: 1, paddingHorizontal: 10 }}>
                        <Image
                           source={require('../../assets/Icon/ayt.jpg')}
                           style={{ width: 130, marginTop: 10, height: 150 }}
                        />
                        <View style={{ marginTop: 10, }}>
                           <Image
                              source={require('../../assets/Icon/bintang.png')}
                              style={{ width: 70, height: 30 }}
                           />
                           <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')}>
                              <View style={{ backgroundColor: 'yellow', width: 100, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}><Text style={{ color: 'black' }}>BELI</Text></View>
                           </TouchableOpacity>
                        </View>
                     </View>
                  </ScrollView>
                  <View style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'center' }}>
                     <Image
                        source={require('../../assets/Icon/premium.png')}
                        style={{ width: 80, height: 50 }}
                     />
                     <Text style={{ fontSize: 20, fontFamily: 'arial', fontWeight: 'bold' }}>Payment</Text>
                  </View>
                  <View style={{ marginHorizontal: 10, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                     <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')}>
                        <Image
                           source={require('../../assets/Icon/ovo.png')}
                           style={{ width: 100, height: 50 }}
                        />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')}>
                        <Image
                           source={require('../../assets/Icon/cash.png')}
                           style={{ width: 100, height: 50 }}
                        />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')}>
                        <Image
                           source={require('../../assets/Icon/shopi.jpg')}
                           style={{ width: 100, height: 50 }}
                        />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')}>
                        <Image
                           source={require('../../assets/Icon/dana.jpg')}
                           style={{ width: 100, height: 50 }}
                        />
                     </TouchableOpacity>
                  </View>
               </View>

            </View >
            {/* <View style={{ backgroundColor: 'white', marginTop: -40, flex: 0.6, borderTopLeftRadius: 40, borderTopRightRadius: 40 }}> Text</View> */}
         </View>
      </ScrollView>
   )
}

export default SignIn

const styles = StyleSheet.create({
   pages: {
      flex: 1,
      backgroundColor: 'gray',
   },
   container: { paddingHorizontal: 24, paddingVertical: 26, marginTop: 20, flex: 1, backgroundColor: 'white' },
   onback: {
      marginLeft: 4,
      marginTop: 5,
      textAlign: 'center',
      width: '12%',
      height: 50,
      backgroundColor: '#708090',
      borderRadius: 5,
      justifyContent: 'center',
      paddingTop: 2
   },

})
