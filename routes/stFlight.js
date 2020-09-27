const express = require('express');
const router = express.Router();

router.get('/stRoomsGeneric', (req, res, next) => {
    let data = {
        name: 'Name',
        propertyName: 'Mr.X',
        phone: '01XXXXXXXXX',
        email: 'Email',
        message: 'Message',
    }
    res.render('st-rooms/stRoomsGeneric', data)
});