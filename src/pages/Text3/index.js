import React, { useEffect } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Vector } from '../../assets';


const Text3 = () => {
   return (
      <ScrollView>
         <View style={{ backgroundColor: '#FFC700', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 200, marginTop: 10 }}>
               <Image
                  source={require('../../assets/Icon/preium3.jpg')}
                  style={{ width: 120, height: 170 }}
               />
            </View>
            <View style={{ backgroundColor: 'white', padding: 20, borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
               <Text style={{ fontSize: 20 }}>
                  Dalam masyarakat kita, terutama masyarakat muslim, nama Muhammadiyah kerap disejajarkan dengan Nahdhatul Ulama. Keduanya adalah organisasi Islam yang sangat berpengaruh di Indonesia.  Kedua  organisasi besar tersebut memiliki jumlah masa yang begitu besar. Begitu pula dengan nama pencetusnya, yaitu KH. Ahmad Dahlan yang kerap pula disejajarkan dengan nama KH. Hasyim Asy’ari. Hal ini tentu sangat beralasan, karena keduanya memang telah bersahabat sejak berguru kepada Kiai Soleh Darat ( Seorang ulama besar dari Semarang.

                  Penjajaran kedua organisasi tersebut beserta tokoh pencetusnya itu, sedikit banyak ternyata sangat bisa menimbulkan gesekan, terlebih perihal ibadah yang dalam beberapa hal memang agak berbeda. Namun, dengan melihat bahwa kedua tokoh tersebut adalah sahabat yang berguru pada satu kiai yang sama. Maka selanjutnya muncul pertanyaan, masih perlukah bagi kita untuk mempersoalkan perbedaan ini?

                  Buku ini mencritakan kepada pembaca sejak KH. Ahmad Dahlan kecil yang memiliki nama Muhammad Darwis, hingga gaya kepemimpinannya dalam membesarkan persyarikatan Muhammadiyah. KH. Ahmad Dahlan kecil dilahirkan di kampung religius, Kauman Yogyakarta yang berada di barat alun-alun utara keraton Yogyakarta. Hingga kemudian perjalanan hidup  KH. Ahmad Dahlan dalam melaksanakan perjuangan yang terinspirasi Al Qur’an. Dakwah yang dilakukan oleh KH. Ahmad Dahlan KH. mendapat sambutan yang beragam di tengah-tengah masyarakat.

                  Membaca buku karya Imron Mustofa ini, menjadikan kita semakin paham mengenai hidup dan perjuangan  KH. Ahmad Dahlan. Setelah membaca buku ini kita tidak lagi mempermasalahkan berbagai macam perbedaan jika memang ada. Sebab, segala sesuatunya memang ada alasan yang melatarbelakangi, termasuk gerakan yang diperjuangkan oleh KH. Ahmad Dahlan.

                  Melalui buku ini, pembaca akan mengetahui bahwa KH. Ahmad Dahlan lebih tua dari KH. Hasyim Asy’ari. Demikian pula, pembaca akan mengetahui Muhammadiyah lebih dahulu didirikan dari pada Nahdhatul Ulama. Imron Mustofa telah memaparkan dengan sangat baik dalam buku ini.

                  Walau memang kita harus mengakui bahwa kedua organisasi tersebut, masing-masing memiliki kekhasan tersendiri. Nahdhatul Ulama memiliki ciri khas tersendiri, Muhammadiyah juga memiliki ciri khas sendiri. Ada banyak hal khusus yang akan kita temukan dalam buku ini, baik itu terkait masa kecilnya di kampung Kauman, perjalanannya dalam menimba ilmu, bahkan hingga ke Timur Tengah, dan perjuangannya dalam mendirikan Persyarikatan Muhammadiyah. Sebuah buku apik yang layak untuk dikoleksi.

                  Penulis buku ini menempuh pendidikan formal di MTs dan MA Wathaniyah Islamiyah Karangduwur, Petanahan, Kebumen. Tahun 2012, penulis menimba ilmu di PGMI FITK UIN Sunan Kalijaga. Sejak kuliah, penulis mengembangkan hobi menulisnya melalui karya resensi. Tulisan penulis sudah berhasil menembus Suara Merdeka, Kedaulatan Rakyat, Tribun Jogya, Koran Nasional, Koran Madura, Radar Surabaya, Harian Nasional dan sebagainya.

                  Buku ini merupakan pilihan yang tepat karena ditulis dalam bahasa yang ringan dan mudah dimengerti. Buku ini cocok bagi siapa saja yang ingin mengetahui sejarah lahirnya KH. Ahmad Dahlan KH.  hingga berdirinya Muhammadiyah.
                  {/* Dalam masyarakat kita, terutama masyarakat muslim, nama Muhammadiyah kerap disejajarkan dengan Nahdhatul Ulama. Keduanya adalah organisasi Islam yang sangat berpengaruh di Indonesia.  Kedua  organisasi besar tersebut memiliki jumlah masa yang begitu besar. Begitu pula dengan nama pencetusnya, yaitu KH. Ahmad Dahlan yang kerap pula disejajarkan dengan nama KH. Hasyim Asy’ari. Hal ini tentu sangat beralasan, karena keduanya memang telah bersahabat sejak berguru kepada Kiai Soleh Darat ( Seorang ulama besar dari Semarang. */}
               </Text>
            </View>
         </View>
      </ScrollView>
   );
}
export default Text3;