const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const ejs = require('ejs');

// Getting routes
const indexRoutes = require('./routes/index');
const sendmail = require('./routes/sendmail');
const stRoomsRoutes = require('./routes/stRooms');
const b2bRoutes = require('./routes/b2bFlight');

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Setting headers for seperate server
app.use((req, res, next) => {
    res.setHeader("Content-Type", "text/html");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method === 'OPTION'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
}) 

// Route Middleware
app.use('/st-rooms', stRoomsRoutes);
app.use('/b2b-flight', b2bRoutes);
app.use('/', indexRoutes);
app.use('/mail', sendmail);

// Error Handelling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        } 
    })
})

module.exports = app;