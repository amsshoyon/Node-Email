const express = require('express');
const router = express.Router();

router.get('/b2bFlightPartialpayRequestSubmit', (req, res, next) => {
    let data = {
    }
    res.render('b2b-flight/b2bFlightPartialpayRequestSubmit', data)
});

router.get('/b2bFlightPartialpayNotifyUpdate', (req, res, next) => {
    let data = {
    }
    res.render('b2b-flight/b2bFlightPartialpayNotifyUpdate', data)
});

router.get('/b2bFlightPartialpaySuccessful', (req, res, next) => {
    let data = {
    }
    res.render('b2b-flight/b2bFlightPartialpaySuccessful', data)
});

router.get('/b2bFlightPartialpayVoucher', (req, res, next) => {
    let data = {
    }
    res.render('b2b-flight/b2bFlightPartialpayVoucher', data)
});

router.get('/b2bFlightPartialpayPaymentReceipt', (req, res, next) => {
    let data = {
    }
    res.render('b2b-flight/b2bFlightPartialpayPaymentReceipt', data)
});

router.get('/b2bFlightPartialpayNotifyUpdate2', (req, res, next) => {
    let data = {
    }
    res.render('b2b-flight/b2bFlightPartialpayNotifyUpdate2', data)
});


module.exports = router;