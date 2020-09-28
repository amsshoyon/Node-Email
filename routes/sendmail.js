require('dotenv').config();
var fs = require("fs");
const express = require('express');
const ejs = require('ejs');
const mailer = require('../mailer');
const path = require('path');

let emailTemplate;

const router = express.Router();

router.post('/', (req, res, next) => {
    
     var data = JSON.parse(req.body.data);
    
     ejs.renderFile(req.body.template, data)
        .then(result => {
            emailTemplate = result;

            const message = {
                to: req.body.to,
                subject: req.body.subject,
                html: emailTemplate
            }

            mailer(message)
        })
        .catch(err => {
            res
                .status(400)
                .json({message: 'Error Rendering emailTemplate', error: err});
        });
});

module.exports = router;