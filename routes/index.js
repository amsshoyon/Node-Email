const express = require('express');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

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

router.get('/build/st-rooms', (req, res, next) => {

    var filePath = req.url.replace('/build/','');
    var directoryPath = 'views/'+filePath+'/templates';
    var destPath = 'dist/st-rooms';

    fs.readdir(directoryPath, function (err, files) {

        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        files.forEach(function (file) {

            var htmlName = file.replace('.ejs','.html');
            var template = fs.readFileSync("views/"+filePath+"/templates/"+file, 'utf-8');
            var html     = ejs.render ( template );

            fs.writeFileSync("./dist/"+htmlName, html, 'utf8');

        });

        console.log('ok');
    });

});

module.exports = router;