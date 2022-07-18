const router = require('express').Router()
const { inputKategori } = require('../controller/kategoriController')
//const { route } = require('express/lib/application')
const controllerUser = require('../controller/userController')

router.post('/Registrasi', (req, res) => {
    controllerUser.registrasiUser(req. body)
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/Login', (req, res) => {
    controllerUser.loginUser(req. body)
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/kategori', (req, res) => {
    input-Kategori.inputKategori (req. body)
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/updateKategori', (req, res) => {
    controllerKategori.updateKategoriById (req. body)
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})
module.exports = router