require('dotenv').config();
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
        cancellationCharge: 'BDT 1,000',
        bookingId: 'ST1234567',
        customerName: 'Khalid Saifullah',
        reservationDate: '16 Oct 2020',
        checkIn: '26 Oct 2020',
        checkout: '29 Oct 2020',
        numberOfGuest: '5',
        numberOfRooms: '2',
        totalPaid: 'BDT 72,449 ',
        freeCancellationDate: '18 Oct 2020'
    }
    res.render('st-rooms/stRoomsBookingCancel', data);
});

router.get('/stRoomsBookingConfirmation', (req, res, next) => {
    let data = {
        receiverName: 'Mr.X',
        bookingId: 'ST1234567',
        customerName: 'KHALED SAIFULLAH',
        reservationDate: '16 Oct 2020',
        checkIn: '26 Oct 2020',
        checkout: '29 Oct 2020',
        numberOfGuest: '5',
        numberOfRooms: '2',
        freeCancellationDate: '18 Oct 2020',
        mealPlan: 'lorem 20',
        specialRequest: 'top floor',
        guests: 'Lubaba Mannan, Hassan Mazedul, Mannan Lubaba, Mazedul Hassan.',
        rooms: [
            {
                roomType: 'Deluxe Room',
                numberOfRooms: '1',
                adult: '2',
                child: '0',
                extraBed: '0',
                duration: '2',
                amount: '36,045'
            }, {
                roomType: 'Super Deluxe Room',
                numberOfRooms: '1',
                adult: '3',
                child: '0',
                extraBed: '0',
                duration: '2',
                amount: '36,045'
            }
        ],
        totalAmount: 'BDT 72,090',
        discount: '0',
        grandTotalAmount: 'BDT 72,090'
    }
    res.render('st-rooms/stRoomsBookingConfirmation', data);
});

module.exports = router;