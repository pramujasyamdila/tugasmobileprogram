import React, { useEffect } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Vector } from '../../assets';


const Text2 = () => {
   return (
      <ScrollView>
         <View style={{ backgroundColor: '#FFC700', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 200, marginTop: 10 }}>
               <Image
                  source={require('../../assets/Icon/premium4.jpg')}
                  style={{ width: 120, height: 170 }}
               />
            </View>
            <View style={{ backgroundColor: 'white', padding: 20, borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
               <Text style={{ fontSize: 20 }}>

                  Abdurrahman Wahid, atau yang lebih populer dengan sebutan Gus Dur, merupakan tokoh panutan yang sangat di hormati oleh banyak kalangan karena pengabdiannya kepada masyarakat,demokrasi, dan islam toleran. sosok penuh teka-teki dan kontroversial sehingga pemikiran dan tindakannya sering disalahpahami oleh banyak kalangan. Dia dipuji oleh banyak kalangna, namum juga dicela oleh mereka yang tak mampu memahami jalan pikiran dan sikapnya. Akan tetapi, penulis buku ini, Greg Barton, berhasil memotret dan menampilkan pemahanan yang utuh dan komprehensif tentang sosok Gus Dur kepada kita.
         </Text>
            </View>
         </View>
      </ScrollView>
   );
}
export default Text2;