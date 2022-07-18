const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dbconfig = require('./config/dbConfig')

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

mongoose.connect(dbconfig.mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Berhasil konek ke mongodb")
}).catch(err => {
    console.log(err)
})

app.get('/', function (req, res) {
  res.send('ANUuuu')
})

app.use("/gambar-barang", express.static("./public/images"));
app.use("/users", require("./routes/userRoutes"));
app.use("/kategori", require("./routes/kategoriRoutes"));
app.use("/barang", require("./routes/barangRoutes"));
app.use("/keranjang", require("./routes/keranjangRoutes"));
app.use("/transaksi", require("./routes/transaksiRoutes"));

// app.get('/data-mahasiswa/:npm/:nama/:alamat', (req,res)=>{
//     res.json({
//         npm:req.params.npm,
//         nama:req.params.nama,
//         alamat:req.params.alamat
//     })
// });
// app.get('/data-mahasiswa-query',(req,res)=>{
//     res.json({
//         npm:req.query.npm,
//         nama:req.query.nama,
//         alamat:req.query.alamat
//     })
// });

//=>localhost:3000/test/20421053/Ardiansyah Ahmad/Ilmu Komputer/Informatika?umur= 19 Tahun&alamat= BDL&status=Menunggu kepastian
// app.post('/test/:npm/:nama/:fakultas/:prodi', function (req, res) {
//     res.json({
//         npm: req.params.npm,
//         nama: req.params.nama,
//         fakultas: req.params.fakultas,
//         prodi: req.params.prodi,
//         umur: req.query.umur,        
//         alamat: req.query.alamat,
//         status: req.query.status,
//         agama: req.body.agama,
//         gender: req.body.gender,
//         hobi: req.body.hobi

//     })
// })
const port = 3000
app.listen(port, () => {
    console.log('server berjalan di port' + port)
})