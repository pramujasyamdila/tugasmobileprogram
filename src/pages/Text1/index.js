import React, { useEffect } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Vector } from '../../assets';


const Text1 = () => {
   return (
      <ScrollView>
         <View style={{ backgroundColor: '#FFC700', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 200, marginTop: 10 }}>
               <Image
                  source={require('../../assets/Icon/buku5.jpg')}
                  style={{ width: 120, height: 170 }}
               />
            </View>
            <View style={{ backgroundColor: 'white', padding: 20, borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
               <Text style={{ fontSize: 20 }}>

                  Beberapa Detail Mengenai Buku
                  Chairul Tanjung Si Anak Singkong
                  Penerbit : Kompas
                  Jumlah halaman : xvi + 384 hlm
                  Desain sampul dan Isi : Tedja A., Aria D. Amir, dan A.N. Rahmawanta
                  Harga  : Rp. 35.000 (Berdasarkan situs Belbuk.com Tanggal 17 April 2019)

                  Sekilas Isi Buku Chairul Tanjung Si Anak Singkong
                  Buku Chairul Tanjung Si Anak Singkong terdiri dari 40 bab. Masing-masing bab menyajikan sebuah perjalanan hidup seorang Chairul Tanjung. Awal bab dimulai dengan perjalanan Chairul Tanjung ketika akan masuk Perguruan Tinggi. Kemudian bab-bab selanjutnya terus menceritakan kehidupannya selama di kampus Universitas Indonesia. Mulai dari jadi juragan fotokopi sampai jadi penjual alat kedokteran.
         </Text>
            </View>
         </View>
      </ScrollView>
   );
}
export default Text1;