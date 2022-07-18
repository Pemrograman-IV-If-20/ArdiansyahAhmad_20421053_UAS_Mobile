const {status} = require('express/lib/response')
const userModels = require('../models/userModels')
const bcrypt = require('bcrypt')

exports.registrasiUser = (data) =>
  new Promise(async (resolve, reject) => {
      const salt = bcrypt.genSaltSync(10)
      const encript = bcrypt.hashSync(data.password, salt)
      Object.assign(data, {
          password: encript
      })
      userModels.findOne({
          email: data.email
      }).then((sudahAdaUser) => {
      if (sudahAdaUser){
          reject({
              status: false,
              msg: 'Email sudah terdaftar'
          })        
         }else {      
            userModels.create(data)
            .then(() => {
                resolve({
                    status: true,
                    msg: 'Berhasil membuat user baru'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi kesalahan pada server'
                })
            })
        }
      })

      userModels.create(data)
       .then(() => {
           resolve({
               status:true,
               msg: 'Berhasil membuat user baru'
           })

       }).catch(err => {
           reject({
               status:false,
               msg: 'Terjadi kesalahan pada server'
           })
       })
})

exports.loginUser = (data) => 
new Promise( async(resolve, reject) => {

    const {userName, password} = data

    console.log(userName, password);

    userModels.findOne({userName: userName})
      .then((user) => {
        console.log(user)
        if (user) {
            const isValid = bcrypt.compareSync(password, user.password)

            if (!isValid) {
                return reject({
                    status: false,
                    msg: "Password salah!!!"
                })
                        }

                resolve({
                    status: true,
                    msg: "Login Berhasil",
                    data: user
                })
        }else {
            reject({
                status: false,
                msg: "Email anda tidak terdaftar!"
            })
        }
      })
})

      
