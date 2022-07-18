const router = require("express").Router();
const transaksiController = require("../controller/transaksiController");

router.post("/input-transaksi", (req, res) => {
    transaksiController.inputTransaksi(req.body)
    .then((result) => {
        res.json(result);
    }).catch((error) => {
        res.json(error);
    });
});

router.get("/get-all-transaksi", (req, res) => {
    transaksiController.getAllTransaksi(req.params.idUser)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.json(err);
        });
    
});

router.get("/get-transaksi-by-id/:idTransaksi", (req, res) => {
    transaksiController.getTransaksiById(req.params.idTransaksi)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.json(err);
        });
    
});

router.get("/get-transaksi-by-idUser/:idUser", (req, res) => {
    transaksiController.getTransaksiByIdUser(req.params.idUser)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.json(err);
        });
    
});


router.delete("/delete-transaksi/:idTransaksi", (req, res) => {
    transaksiController.deleteTransaksi(req.params. idTransaksi)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
});

module.exports = router;