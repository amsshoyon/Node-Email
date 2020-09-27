const express = require('express');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('index.ejs');
});

router.get('/create/:slug', (req, res, next) => {
    
    var directoryPath = 'views/'+req.params.slug;
    var templatesArr = []; 

    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        files.forEach(function (file) {
            var name =  file.replace(".ejs", '');
            templatesArr.push({
                file: directoryPath+'/'+file,
                name: name
            });
        });
        
        data = {
            dir: directoryPath,
            templates: templatesArr
        }
        res.render('email.ejs', data);
    });
});

router.post('/getData', (req, res, next) => {
    var template = req.body.template;
    var jsonFile = template.replace('views/', '').replace('.ejs', '');

    jsonFile = '../data/'+jsonFile+'.json';
    let json = require(jsonFile);
    res.json(json);
});

module.exports = router;