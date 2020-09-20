const express = require('express');
const path = require('path');
const fs = require('fs');
const directoryPath = 'views/st-rooms';

const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('index.ejs');
});

router.get('/email', (req, res, next) => {
    var filesArr = [];
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        files.forEach(function (file) {
            filesArr.push({
                'template': file
            })
        });
        var data = {
            files: filesArr
        };
        res.render('email.ejs', data);
    });
});

module.exports = router;