const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'Yandex',
    auth: {
        user: '',
        pass: ''
    }
})