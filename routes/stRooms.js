require('dotenv').config();
const express = require('express');

const router = express.Router();

router.get('/stRoomsRegSubmit', (req, res, next) => {
    let data = {
        receiverName: 'Mr.X'
    }
    res.render('st-rooms/stRoomsRegSubmit', data)
});

router.get('/stRoomsRegFailed', (req, res, next) => {
    let data = {
        receiverName: 'Mr.X'
    }
    res.render('st-rooms/stRoomsRegFailed', data);
});

router.get('/stRoomsRegSuccessful', (req, res, next) => {
    let data = {
        receiverName: 'Mr.X',
        username: 'username',
        password: 'p@ssword'
    }
    res.render('st-rooms/stRoomsRegSuccessful', data)
});

router.get('/stRoomsPasswordResetRequest', (req, res, next) => {
    let data = {
        receiverName: 'Mr.X',
        passwordResetUrl: '#'
    }
    res.render('st-rooms/stRoomsPasswordResetRequest', data)
});

router.get('/stRoomsPasswordResetSuccessful', (req, res, next) => {
    let data = {
        receiverName: 'Mr.X'
    }
    res.render('st-rooms/stRoomsPasswordResetSuccessful', data)
});

router.get('/stRoomsBookingCancel', (req, res, next) => {
    let data = {
        receiverName: 'Mr.X',
        cancellationCharge: '10',
        bookingId: 'st123',
        customerName: 'Abdullah',
        reservationDate: '12-01-2020',
        checkIn: '12-01-2020',
        checkout: '12-01-2020',
        numberOfGuest: '4',
        numberOfRooms: '1',
        totalPaid: '2000',
        freeCancellationDate: '12-01-2020'
    }
    res.render('st-rooms/stRoomsBookingCancel', data);
});

router.get('/stRoomsBookingConfirmation', (req, res, next) => {
    let data = {
        receiverName: 'Mr.X',
        bookingId: 'st123',
        customerName: 'Abdullah',
        reservationDate: '12-01-2020',
        checkIn: '12-01-2020',
        checkout: '12-01-2020',
        numberOfGuest: '4',
        numberOfRooms: '1',
        totalPaid: '2000',
        freeCancellationDate: '12-01-2020',
        mealPlan: 'lorem 20',
        specialRequest: 'top floor',
        guests: 'Lubaba Mannan, Hassan Mazedul, Mannan Lubaba, Mazedul Hassan.',
        rooms: [
            {
                roomType: 'delux',
                numberOfRooms: '4',
                adt: '2',
                chd: '3',
                extraBed: '0',
                duration: '2',
                amount: '1000'
            }, {
                roomType: 'delux',
                numberOfRooms: '4',
                adt: '2',
                chd: '3',
                extraBed: '0',
                duration: '2',
                amount: '1000'
            }
        ],
        totalAmount: '3000',
        discount: '0',
        grandTotalAmount: '3500'
    }
    res.render('st-rooms/stRoomsBookingConfirmation', data);
});

module.exports = router;