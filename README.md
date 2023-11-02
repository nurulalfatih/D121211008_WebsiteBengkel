# D121211008_WebsiteBengkel

IDE dan FITUR :
  Ide saya yaitu membuat website untuk suatu bengkel. Dalam website ini saya menambahkan beberapa fitur sesuai dengan service yang disediakan bengkelnya. Bengkel ini menyediakan service spooring, balancing, isi nitrogen, dan ganti oli. Dalam website ini berisi penjelasan mengenai bengkel ini, service apa saja yang tersedia juga pricelist dari setiap service, daftar2 oli yang tersedia dan bisa dibeli langsung dari website, juga ada maps yang akan menunjukkan lokasi bengekelnya dan user dapat melakukan reservasi dengan mengisi form disamping maps, terakhir ada fitur info kontak bengkel dan akun2 sosial medianya. User juga dapat menggunakan fitur search bar dan.

PENGEMBANGAN dan PENGGUNAAN :
Dalam pengembangan website ini saya menggunakan IDE visual studio code dan menggunakan bahasa HTML, CSS, juga JavaScript.

HTML :
  HTML ini saya gunakan untuk menyusun tulisan pada setiap section yang akan tampil di web page saya juga untuk membuat paragraf, heading, dan link pada web page.
  
Saya menggunakan beberapa elemen seperti :
1. html
2. head, yang didalamnya berisi link font, link icon, juga link yang menghubungkan dengan file CSS
3. title, tag ini berada didalam tag <head> yang saya gunakan untuk menamai web page saya
4. body, tag ini memuat isi dari website saya yang memuat beberapa section yaitu navbar, hero, about, service, oil, contact, footer, dan box detail. Juga berisi link yang menghubungkan dengan file javascript
5. h, tag ini saya gunakan untuk membuat bagian heading, dan saya menggunakannya di semua section
6. p, tag ini saya gunakan untuk membuat paragraf juga saya gunakan hampir di semua section
7. !--, tag komentar ini saya gunakan untuk menandai setiap section agar memudahkan saya

Saya juga menggunakan beberapa atribut seperti :
1. src, atribut ini saya gunakan didalam elemen img untuk menambahkan foto. Juga didalam elemen script untuk menambahkan url icon yang akan digunakan nanti dan untuk menghubungkan file html dengan file javascript
2. href, atribut ini saya gunakan didalam elemen a pada beberapa class untuk memasukkan link spesifik. Juga saya gunakan didalam elemen link untuk memanggil link font, link google maps, dan link untuk menghubungkan html dengan file css
3. action, atribut ini saya gunakan didalam tag <form> pada section contact untuk membuat form reservasi

CSS :
  CSS ini saya gunakan membuat tampilan website saya responsif juga lebih menarik dan rapi, dengan memasukkan format ukuran, dan warna. Jenis CSS yang saya gunakan adalah external CSS dimana file nya saya pisahkan dari file HTML dan saya beri nama style.css. Parameter yang saya pakai pada CSS ini adalah px dan rem
  Website saya ini memiliki 4 warna yaitu hijau, merah, hitam, dan putih yang saya jadikan variable dalam pseudo-class root agar memudahkan saya untuk mengaksesnya dengan menggunakan fungsi var().
  Saya juga membuat tampilan web ini responsif dengan menggunakan media queries. Ukuran responsif yang saya gunakan adalah laptop (1366px), tablet (768px), dan handphone (450px).

JAVA SCRIPT :
  JavaScript ini saya gunakan untuk membuat interaksi pada web page saya, jenis JavaScript yang saya gunakan adalah external dan saya beri nama script.js
  Saya menggunakan JavaScript ini untuk melakukan interaksi pada beberapa section di web page saya dengan menggunakan toggle class pada setiap sectionnya. Section yang saya berikan toggle class adalah hamburger menu, search bar, dan shopping cart. Dalam toggle class tersebut saya membuat class active dimana saat user men-click icon hamburger menu, shopping cart, ataupun search tampilannya akan langsung muncul.
  Setelah itu saya juga tambahkan fungsi untuk menghapus/memberhentikan class active tersebut apabila user men-click daerah selain tampilan class.
  Selanjutnya JavaScript saya juga berisi fungsi untuk melakukan interaksi dengan section service dimana saat user men-click icon down akan ada tampilan pricelist dari setiap service. Juga saya menambahkan 2 fungsi untuk menutup tampilan pricelist itu dengan men-click icon close(x) atau men-click daerah selain tampilan pricelistnya.
