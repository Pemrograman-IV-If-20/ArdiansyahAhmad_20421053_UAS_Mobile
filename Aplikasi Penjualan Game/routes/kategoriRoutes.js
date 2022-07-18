const router = require('express').Router()
//const { route } = require('express/lib/application')
const controllerKategori = require('../controller/kategoriController')

router.post('/input-kategori', (req, res) => {
    controllerKategori.inputKategori(req. body)
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/getAllKategori', (req, res) =>{
    controllerKategori.getAllKategori()
    .then((result)=> {
        res.json(result)
    }).catch((error) => {
        res.json(error)
    })
})

router.get('/getKategoriById/:idKategori', (req, res) =>{
    controllerKategori.getKategoriById(req.params.idKategori)
    .then((result)=> {
        res.json(result)
    }).catch((error) => {
        res.json(error)
    })
})

router.put('/updateKategoriById/:idKategori', (req, res) => {
    controllerKategori.updateKategoriById(req.params.idKategori, req.body)
    .then((result) => {
        res.json(result)
    }).catch (err => {
        res.json(err)
    })
})

router.delete('/deleteKategori/:idKategori', (req, res) => {
    controllerKategori.deleteKategori(req.params. idKategori)
    .then((result) => {
        res.json(result)
    }).catch (err => {
        res.json(err)
    })
})

module.exports = router