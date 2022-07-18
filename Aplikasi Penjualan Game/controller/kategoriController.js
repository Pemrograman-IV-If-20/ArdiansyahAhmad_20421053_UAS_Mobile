const kategoriModel = require('../models/kategoriModels');
const objectId = require('mongoose').Types.ObjectId;
 
exports.inputKategori =(data) => 
    new Promise(async (resolve, reject) => {
 
  console.log(data);
      kategoriModel.findOne({namaKategori: data.namaKategori})
        .then((kategori) => {
 
            if(kategori && data.namaKategori.toLowerCase() == 
            kategori.namaKategori.toLowerCase()) {
              console.log(data.namaKategori.toLowerCase()
            == kategori.namaKategori.toLowerCase())
              return reject({
                status: false,
                msg: 'Nama kategori sudah tersedia, silahkan input dengan nama kategori lain'
              })
 
            }
 
            kategoriModel.create(data).then(() => {
              resolve({
                status: true,
                msg: 'Berhasil menambahkan kategori'
              })
            }).catch(err => {
              reject({
                status: false,
                msg: 'Terjadi kesalahan'
              })
            })
 
        }).catch((err) => {
          reject({
            status: false,
            msg: 'Terjadi kesalahan'
          })
        })
    })

    exports.getAllKategori = () =>
new Promise((resolve, reject) => {
  kategoriModel.find().then((kategori) => {
    if(kategori.length > 0) {
      resolve({
        status : true,
        msg : 'berhasil memuat data kategori',
        data : kategori
      })
    }else {
      reject({
        status : false,
        msg :'Tidak ada data'
      })
    }
  }).catch(err => {
    reject({
      status : false,
      msg : 'Terjadi kesalahan pada server'
    })
  })
})

exports.getKategoriById =(idKategori) => 
    new Promise((resolve, reject) => {
      kategoriModel.findOne({_id: objectId(idKategori)})
      .then((kategori) =>{
        if(kategori) {
          resolve({
            status : true,
            msg : 'Berhasil memuat data',
            data : kategori
          })
        } else {
          reject ({
            status : false,
            msg : 'Kategori tidak ditemukan'
          })
        }
      }).catch((error)=>{
        reject({
          status: false,
          msg: 'Terjadi kesalahan'
        })
      })
    })

    exports.updateKategoriById =(idKategori, data) => 
    new Promise((resolve, reject) => {
            kategoriModel.updateOne({_id: objectId(idKategori)}, data)
              .then(() => {
                resolve({
                  status: true,
                  msg: 'Berhasil mengubah kategori'
                })
              }).catch(err => {
                reject({
                  status: false,
                  msg: 'Terjadi kesalahan pada server'
                })
              })
          }) 

    exports.deleteKategori = (idKategori) =>
    new Promise((resolve, reject) => {
      kategoriModel.deleteOne({_id: objectId(idKategori)})
      .then(() => {
        resolve({
          status : true,
          msg : 'Berhasil Menghapus Data'
        })
      }).catch(err => {
        reject ({
          status : false,
          msg: 'Terjadi Kesalahan Pada Server'
        })
      })
    })
// const kategoriModels = require('../models/kategoriModels');

// exports.inputKategori =(data) =>
//     new Promise(async (resolve, reject) => {
//         kategoriModels.findOne({nama: data.nama})
//           .then((kategori) => {
//             if (kategori){
//                 (data.namaKategori.toLowerCase() == kategori.namaKategori.toLowerCase())
//             }
//            console.log(data.namaKategori.toLowerCase() == kategori.namaKategori.toLowerCase())
//             if (data.namaKategori.toLowerCase() == kategori.namaKategori.toLowerCase()){
//                 return reject({
//                     status: false,
//                     msg: 'Nama kategori sudah tersedia,Silakan pilih yang lain'
//                 })
//             }

//             kategoriModels.create(data).then(() => {
//                 resolve({
//                     status: true,
//                     msg: 'Berhasil Menambahkan Kategori'
//                 })
//             }).catch(err => {
//                 reject({
//                     status: false,
//                     msg: 'Terjadi Kesalahan'
//                 })
//             })
//           })

//     })
    //https://pastebin.com/bGq6f767
    //https://pastebin.com/Wju2Z2dy
    //https://pastebin.com/5TaDHYm9