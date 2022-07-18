String baseUrl = 'http://192.168.100.222:3000';

//users
String signIn = "$baseUrl/users/Login";
String signUp = "$baseUrl/users/Registrasi";

//barang
String dataBarangRes = "$baseUrl/barang/get-all-barang";

//keranjang
String inputKeranjangRes = "$baseUrl/keranjang/input-keranjang";
String getAllKeranjangRes = "$baseUrl/keranjang/get-all-keranjang";
String updateKeranjangRes = "$baseUrl/keranjang/update-keranjang";
String hapusKeranjangRes = "$baseUrl/keranjang/delete-keranjang";

//transaksi
String transaksiInput = "$baseUrl/transaksi/input-transaksi";
String getTransaksi = "$baseUrl/transaksi/get-transaksi-by-idUser";
