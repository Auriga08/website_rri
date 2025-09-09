// src/pages/SejarahPage.jsx

import React from 'react';
import { Layout } from '../components/Layout';
import './SejarahPage.css';

export const SejarahPage = () => {
  return (
    <Layout>
      <section className="sejarah-section">
        <div className="sejarah-container">
          <h1 className="sejarah-title">Selayang Pandang Berdirinya RRI Jambi</h1>
          
          {/* PASTIKAN PATH GAMBAR INI BENAR */}
          <img 
            src="/images/gedung-rri.png" 
            alt="Gedung RRI Jambi" 
            className="sejarah-image"
          />

          <div className="sejarah-content">
            <p>
              Jambi, 1956.. Matahari pagi itu seakan enggan menampakkan sinarnya, cuaca mendung berlarut, namun tak juga kunjung hujan. Suasana di sekitar itu memang nyaris tak memberikan gairah kehidupan. Berbagai berita dan informasi tentang situasi politik, membuat masyarakat semakin gelisah.
            </p>
            <p>
              Keresidenan Jambi, Keresidenan Batanghari, Keresidenan Merangin, dan Keresidenan Kerinci adalah bagian dari wilayah Provinsi Sumatera Tengah beribukota di Palembang. Secara menyeluruh situasi keamanan Sumatera dianggap tidak kondusif, karena adanya pemberontakan PRRI yang berpusat di Sumatera Barat.
            </p>
            <p>
              Ketika itu, informasi dan berita menjadi sangat penting, terutama demi menenangkan rakyat dari berbagai kekhawatiran serta meyakinkan bahwa situasi dapat dikendalikan. Maka, 1956 lahirlah Radio Jambi. Merupakan pilihan ideal yang diambil oleh Penguasa Perang di Jambi saat itu. Radio Jambi menyampaikan Informasi dengan cepat dan meluas hingga ke seluruh keresidenan; Jambi, Batanghari, Merangin, dan Kerinci. Radio Jambi menjadi pemeran penting dalam mengendalikan informasi dan strategi keamanan kala itu.
            </p>

            <h2 className="sejarah-subheading">Para Perintis</h2>
            <p>
              Sebagai perintis berdirinya RRI-Jambi, dengan deretan penyiar, reporter, dan peliput berita: H. Asri Rasyid, Rosdani Tayeb, Siti Nurmala, Zalni AS, Hatib Barmawi, Nurlini, A. Razak, Ismail, Saleh Basyar, M. Basyir Manan, M.T. Fahrudin dan Raden Yancik.
            </p>
            <blockquote className="sejarah-quote">
              <p>
                Komunikasi langsung dan cepat ke daerah-daerah di Jambi waktu itu ada namanya Radio Televoni. Bagian dari Pos dan Telegrap kalau sekarang terpisah. Waktu itu belum propinsi masih KARASIDENAN. Radio televoni ini pemancar studionya ada dibelakang kantor pos, bekas kantor kotamadya disitulah dulu studio radio Jambi. Sedangkan kantor redaksinya itu sekarang ini didepan Mandala diatasnya ada asrama polisi dibawahnya itu ada satu rumah yang digunakan untuk kantor redaksi. Radio Jambi beroperasi mulai jam 6 sampai jam 8 malam, sedangkan para petugasnya sebagian besar dari jawatan penerangan kabupaten. Tahun 1957 propinsi nya terbentuk, tahun 1959 menteri Penerangan mengeluarkan Surat Keputusan Membentuk RRI Jambi.
              </p>
              <footer>— H. Asri Rasyid</footer>
            </blockquote>
            <p>
              Radio Jambi berlokasi dikawasan kampung Enclek samping asrama Polisi sekitar Kelurahan Rajawali Kec. Pasar Jambi. Menempati sebuah bangunan rumah lama, dengan menggunakan pemancar PTT POS, TELEGRAP, dan TELEPON berkekuatan 300 Watt gelombang 120 meter, hanya mengudara 2 jam dalam sehari semalam; pukul 18.00 s/d 20.00 WIB. Penanggung jawab keamanan studio Radio Jambi dikuasai Letnan II Samsudin Uban, yang namanya diabadikan sebagai nama jalan di Jambi.
            </p>
            <p>
              Pemberontakan PRRI pimpinan Kolonel Ahmad Husen saat itu sangat berpengaruh terhadap Propinsi Jambi yang baru saja didirikan. Radio Jambi menjadi guna menyampaikan berita kepada rakyat Jambi. Ketika itu pemberontakan PRRI sudah mendesak ke wilayah Bangko, tahun 1958.
            </p>

            <h2 className="sejarah-subheading">Transformasi Menjadi RRI Jambi</h2>
            <p>
              Waktu berjalan tanpa terasa, perkembangan situasi dan berbagai pembangunan sangat menjadi perhatian RRI Jambi guna diberitakan kepada masyarakat luas, demikian pula sebaliknya, masyarakat semakin antusias untuk mendengar apa yang diberitakan RRI Jambi. Sejak Provinsi Jambi terbentuk 6 Januari 1957 turut pula dibentuk Badan Persiapan Radio yang diketuai oleh R. Sumardi, PS. Dan selanjutnya pada tanggal 24 Agustus 1959 dikeluarkan SK Menteri Penerangan tentang berdirinya RRI Jambi.
            </p>
            <p>
              Tentu saja, secara otomatis, setelah berdirinya RRI Jambi pada tahun 1960 maka Radio Jambi pun berakhir dengan kata lain berganti nama menjadi Radio Republik Indonesia Jambi. RRI Jambi menempati bangunan rumah pemberian Walikota Jambi Raden Sudarsono, di Murni dengan pemancar MW, 300 Watt yang dirakit. Namun demikian meski dengan peralatan masih sederhana, RRI-Jambi harus tetap berperan optimal demi kepentingan pemerintah saat itu.
            </p>

            <h2 className="sejarah-subheading">Era Pembangunan dan Kepemimpinan Muhammad Nurdin Supomo (1960-1966)</h2>
            <p>
              Tahun 1962 pemancar berkekuatan 1 kilo-watt buatan Amerika dengan merek RCA telah terpasang untuk RRI Jambi didirikan di Sipin. Pemancar ini tentu saja dapat memperluas daya siar cukup luas, dan penyiaran pun dapat terselenggara sejak pagi hingga malam di bawah pimpinan Muhammad Nurdin Supomo menjabat sebagai kepala Stasiun RRI Jambi.
            </p>
            <p>
              Muhammad Nurdin Supomo bertugas sejak 1960 sampai dengan 1966. Beliau dimutasi dari RRI Palembang dengan mengandalkan 20 karyawan RRI. Saat itu, Muhammad Nurdin Supomo yakin RRI Jambi bisa berdiri dan berjaya dengan sederetan penyiar yang handal saat itu diantaranya:
            </p>
            <ol className="sejarah-list-ol">
              <li>Sulaini Majid /Kidu</li>
              <li>M. Yasid</li>
              <li>Jas Budaya</li>
              <li>Rohaya</li>
              <li>Udin Tayib</li>
              <li>Alinus</li>
              <li>Samsul Muin Harahap</li>
              <li>Dan Aceng</li>
            </ol>
            <p>
              Setelah setahun dilantik menjadi kepala RRI Jambi Muhammad Nurdin Supomo mendirikan bangunan di Sipin untuk menempatkan pemancar berkekuatan 1 kilowatt gelombang 89 meter. Dua tahun kemudian 1963 MN. Supomo mendirikan gedung di tempat yang sama yang diresmikan oleh Menteri Penerangan Akagani. Dalam upaya meningkatkan daya jangkau RRI Jambi dan memberi terobosan baru pada tahun 1964 MN. Supomo mendatangkan pemancar yang lebih besar dengan kekuatan 7,5 kilowatt sehingga daya pancar siar RRI Jambi sudah dapat didengar hingga ke pelosok desa di Provinsi Jambi. Ketika itu terjadi Konfrontasi dengan negara Malaya yang sekarang Malaysia RRI Jambi telah meracik acara Muhibah Ke Tanah Melayu dan Genta Suara Dari Langit, siaran RRI Jambi dapat didengar di sebagian negara Asia Tenggara hingga ke Benua Eropa.
            </p>
            <p>
              Muhammad Nurdin Supomo kemudian menata paket siaran yang sesuai dengan kondisi daerah Jambi kala itu, dengan 8 jam siaran setiap hari. Sedangkan setiap hari libur jam siaran ditambah menjadi 13 jam. Pada bulan September 1965 terjadi peristiwa berdarah yang dikenal dengan Penghianatan G-30.S PKI di ibukota negara RI. RRI Jambi telah ambil bagian dan turut serta dalam memberikan informasi yang sebenarnya kepada masyarakat pendengar mengenai situasi musibah yang menimpa bangsa Indonesia yang tercinta ini. Selama 6 tahun kepemimpinannya beliau telah mendarmabaktikan dirinya dan telah memberikan yang terbaik kepada RRI Jambi pada tahun 1966 beliau dipindahkan ke Jakarta.
            </p>
            
            <h2 className="sejarah-subheading">Tongkat Estafet Kepemimpinan</h2>
            <p>
              Kemudian muncullah orang kedua Baktiar Efendi, beliau sebelumnya kepala Bidang RRI Medan. Satu tahun kemudian beliau dipindahkan ke RRI Purwokerto. Posisi kepala RRI Jambi selanjutnya dijabat oleh Azil Aswar sebagai kepala RRI Jambi yang ke-3 memangku jabatan dari tahun 1967 hingga tahun 1975. Beliau sebelumnya mantan Kasi siaran RRI Padang. Beliau juga banyak memberikan andil untuk pembangunan RRI Jambi diantaranya pada tahun 1975 RRI Jambi yang beralamat di jalan Sultan Agung. Murni dipindahkan ke jalan Ahmad Yani No. 5 Telanai Pura dengan luas lokasi 1 hektar pemberian Gubernur Jambi Raden Muhammad Nur Ahmadibrata. Delapan tahun Azil Aswar telah mendesain RRI Jambi hingga berakhir pada tahun 1975 kemudian dipindahtugaskan ke RRI Pekan Baru, Riau.
            </p>
            <p>
              Kepala RRI Jambi selanjutnya dijabat oleh Amiruddin Siahaan sebagai kepala RRI Jambi ke-4 yang sebelumnya sebagai kepala seksi siaran RRI Banda Aceh. Di masa kepemimpinannya ia telah membangun gedung pemancar, serta 4 buah rumah dinas di atas tanah seluas 10 hektar di Mendalo yang diresmikan oleh: Menteri Perdagangan Radius Prawiro, 20 April 1976. Pada tahun yang sama juga telah membangun satu buah rumah dinas kepala stasiun dan satu buah rumah dinas operator di Sipin.
            </p>
            <p>
              Pada tahun 1981 Amirudin Siahaan berakhir masa jabatannya di Jambi, dan ia digantikan oleh Syair Siak, BA sebagai kepala RRI Jambi yang ke-5 yang sebelumnya menjabat kepala Seksi Siaran RRI Padang. Di masa kepemimpinan Syair Siak melanjutkan pembangunan gedung auditorium berlantai 2, dengan berbagai fasilitas dan berkapasitas 500 tempat duduk yang diresmikan oleh Menteri Penerangan H. Harmoko tanggal 1 April 1984 sekaligus peresmian operasional siaran RRI Jambi 24 jam terus menerus, juga pada tahun yang sama membangun studio rekaman dan studio penyiaran. 6 tahun kemudian 1987, Syair Siak dipindahtugaskan ke RRI Bukit Tinggi.
            </p>
            <p>
              Waktu terus berputar, ada masa datang dan ada masa berlalu. Drs. H. Ali Imran yang sebelumnya menjabat sebagai kepala RRI Ambon, pada tahun 1987 ia menjabat sebagai Kepala Jambi yang ke-6. Dan berakhir pada tahun 1990, Drs. H. Ali Imran dipindahtugaskan ke Jakarta membidangi siaran khusus luar negeri.
            </p>
            <p>
              Kemudian RRI Jambi selanjutnya dipimpin oleh Marlis Ramali, yang sebelumnya kepala seksi pemberitaan RRI Pekan Baru. Dan di masa kepemimpinannya sebagai Kepala RRI Jambi 1990-1993, Marlis Ramali telah membangun serambi depan kantor RRI Jambi, yang kemudian ia dialihtugaskan ke RRI Padang.
            </p>
            <p>
              Alih tugas di kalangan pemerintahan merupakan suatu hal yang lumrah. Selain untuk mengatasi kejenuhan juga sebagai upaya untuk memotifasi dan meningkatkan prestasi dan karir.
            </p>
            <p>
              Pada tahun 1993 Adjuzar Tjang Abbas dipercaya memimpin RRI Jambi sebagai kepala stasiun ke-8 yang sebelumnya sebagai kepala RRI Bogor. Di masa kepemimpinannya, RRI Jambi selangkah lebih maju dengan adanya berbagai bantuan peralatan studio pemancar dari Austria. Berbagai ide dan gagasan pun menyeruak dalam benaknya Tjang Abbas. Demikian juga berbagai kemasan acara diraciknya. Setelah membuka siaran Pro-2 dengan tower setinggi 50 meter di Telanai Pura. Kemudian membenahi gedung drama dan studio multimedia, juga perangkat rekaman, sekaligus peralatan musik band. Pengadaan mobil OBIVEN khusus siaran luar, pengadaan studio EQUIKMEN. Membangun ruang perlengkapan dan pemberitaan, berlantai 2 dan satu mushola di kompleks kantor RRI Jambi. Tahun 1995 Adjuzar Tjang Abbas dialihtugaskan ke RRI Lampung.
            </p>
            <p>
              Kepala RRI Jambi berikutnya Buhari Muhammad menjabat sebagai kepala RRI Jambi ke-9 yang sebelumnya menjabat Kepala RRI Bukit Tinggi. Dalam kepemimpinannya, Buhari telah mendirikan 2 buah tower 75 meter dan 40 meter terpancang di Mendalo. Selain pembenahan lainnya termasuk membangun Pos Penjagaan, Buhari Muhammad merespon pengembangan seni budaya hingga Ia menghadirkan alat musik tradisional tepat pada Hari Jadi Ke- .... RRI Jambi tahun 1996. Dan pada hari Bakti Radio tahun 1997 RRI Jambi meraih prestasi juara 1 SUARA KENCANA.
            </p>
            <p>
              Tahun 1998 Buhari Muhammad berakhir tugas di RRI Jambi. Kemudian hadir H. Rozakim, SH. menjadi kepala RRI Jambi ke-10 yang sebelumnya menjabat kepala RRI Tanjung Pinang Riau. Dua tahun kemudian H. Rozakim, SH. beralihtugas. Kepala RRI Jambi dilanjutkan oleh H. Syafri Rais, S. Sos sebagai kepala RRI ke-11. yang sebelumnya kepala RRI Loksmauwe dan ia bertugas di Jambi hingga 2004. dialihtugaskan ke Pekan Baru.
            </p>
            <p>
              Kepala RRI Jambi selanjutnya dijabat oleh Sudirman, S.W sebagai kepala RRI Jambi ke-12. Beliau adalah pejabat SPI Pusat. Saat kepemimpinannya Sudirman,S.W berkesempatan merehab gedung kantor, gedung pemancar, gedung auditorium, dan gedung deisel sekaligus penambahan peralatan pamancar operasional. Tahun 2007 Sudirman,S.W berakhir. Sementara itu Syaiful Anwar, SH / Kabag TU RRI Jambi sementara sebagai pelaksana tugas.
            </p>
            <p>
              Tidak lama kemudian Direktur Utama RRI, Parni Hadi mempercayakan Drs. Marudut Edison Pandiangan sebagai Kepala RRI Jambi ke-13. Marudut Edison Pandiangan merupakan sosok cerdas dan sedikit seniman, sebelumnya ia sebagai kepala RRI Sibolga, Sumatera Utara. Lebih kurang 4 tahun Marudut Ediso mengelola RRI Jambi, berbagai pembenahan dilakukan demi kelancaran dan kesempurnaan penyiaran, termasuk membenahi tower Telanai dan Mendalo. Melakukan kerjasama dengan Elektronik ESIA dan ANTV. pengembangan sistem komputerisasi pada setiap seksi. Marudut Edison bergegas mengembangkan berbagai kegiatan budaya yang melibatkan para penggiat kesenian tradisi dan kesenian modern di kalangan generasi muda Jambi, hingga terhimpun Musisi Muda Jambi 2009, hingga sekarang, Terhimpun juga Komunitas Pemerhati Siaran RRI Jambi. Kepemilikan masyarakat terhadap keberadaan RRI semakin tampak atas adanya gelar siar budaya antar etnis. Juga telah terhimpun Komunitas Budaya Nusantara (KBN-RRI Jambi) hingga sekarang.
            </p>
            
            <h2 className="sejarah-subheading">Kepemimpinan Suyono Wasis, SH, MM</h2>
            <p>
              4 tahun kemudian setelah Drs. Marudut Edison Pandiangan, kini hadir Suyono Wasis, SH. MM, pemimpin RRI Jambi ke-14. Cerdas, cekatan, sigap pada setiap kondisi, dan responsip terhadap usulan-usulan kreatif dari siapapun. Dia-lah Suyono Wasis.
            </p>
            <p>
              Keterlibatannya sebagai pewara, presenter, broadkester, peliput, dan juga sebagai jurnlis, sudah terlalu lebar daratan yang telah dijajaki Suyono Wasis. Dan sebelum berangkat ke Jambi, cukup lama Ia bermukim di Meulaboh, Aceh Utara sebagai kepala RRI Meulaboh. Kini, Ia tengah mengaplikasikan berbagai gagasannya di RRI Jambi. Kehadirannya diawali dengan bersilaturahim dengan keluarga besar RRI Jambi, tak terkecuali dengan para purna tugas RRI Jambi. Ia menyebutnya “inilah titik pembangunan dan pengembangan sebuah intsitusi, Silaturahim”.
            </p>
            <p>
              Selanjutnya Suyono melakukan berbagai kerjasama dengan berbagai instansi lainnya. Setelah membangun Loby Ruang Tunggu Narasumber yang diresmikan oleh Direktur Utama LPP RRI, Dra. Rosita Niken Widiastuti, M.Si pada tanggal 5 April 2012. Kemudian mengaktifkan Siaran Audio Strimeing www.rri.jambi.com.
            </p>
            <p>
              Penerapkan kedisiplinan karyawan RRI Jambi untuk aktif mengikuti apel sekali sebulan dan olahraga bersama. Penataan kembali acara-acara yang melibatkan publik. Mengaktifkan Streaming RRI dan mendesain Studio Pro 2. Membangun ruang tunggu narasumber yang diresmikan oleh Dirut RRI April 2011. Membangun gapura masuk dan keluar Gedung RRI Jambi.
            </p>
            <p>
              Pada Rangkaian Hari Radio 67 “Indonesia Berdonor” kerjasama dengan PMI, Dinas Kesehatan, BKKBN. Dihadiri oleh berbagai Perguruan Tinggi, Polda Jambi, TNI Ga-Pu 042 Garuda Putih. Dan Beberapa Instansi Kota dan Provinsi Jambi. Suara Kencana Hari Radio-67 RRI Jambi meraih Juara III dalam Investigas Berita. 2012. Tahun 2013 RRI Jambi dipercaya sebagai tuan rumah “Jambore Siaran Nasional” JAMSINAS 13- 2013.
            </p>
            <p className="sejarah-author">Disusun oleh: Mahmud Al Mahdaly</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};