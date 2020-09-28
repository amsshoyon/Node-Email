require('dotenv').config();
const express = require('express');

const router = express.Router();

router.get('/stRoomsGeneric', (req, res, next) => {
    let data = require('../data/st-rooms/stRoomsGeneric.json');
    res.render('st-rooms/stRoomsGeneric', data)
});

router.get('/stRoomsRegSubmit', (req, res, next) => {
    let data = require('../data/st-rooms/stRoomsRegSubmit.json');
    res.render('st-rooms/stRoomsRegSubmit', data)
});

router.get('/stRoomsRegFailed', (req, res, next) => {
    let data = require('../data/st-rooms/stRoomsRegFailed.json');
    res.render('st-rooms/stRoomsRegFailed', data);
});

router.get('/stRoomsRegSuccessful', (req, res, next) => {
    let data = require('../data/st-rooms/stRoomsRegSuccessful.json');
    res.render('st-rooms/stRoomsRegSuccessful', data)
});

router.get('/stRoomsPasswordResetRequest', (req, res, next) => {
    let data = require('../data/st-rooms/stRoomsPasswordResetRequest.json');
    res.render('st-rooms/stRoomsPasswordResetRequest', data)
});

router.get('/stRoomsPasswordResetSuccessful', (req, res, next) => {
    let data = require('../data/st-rooms/stRoomsPasswordResetSuccessful.json');
    res.render('st-rooms/stRoomsPasswordResetSuccessful', data)
});

router.get('/stRoomsBookingCancel', (req, res, next) => {
    let data = require('../data/st-rooms/stRoomsBookingCancel.json');
    res.render('st-rooms/stRoomsBookingCancel', data);
});

router.get('/stRoomsBookingConfirmation', (req, res, next) => {
    let data = require('../data/st-rooms/stRoomsBookingConfirmation.json');
    res.render('st-rooms/stRoomsBookingConfirmation', data);
});

module.exports = router;