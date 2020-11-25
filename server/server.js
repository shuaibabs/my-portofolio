const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require('cors');
const router = express.Router();
const PORT = process.env.PORT || 4000;

const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(bodyParser.json());


//setup nodemailer
let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    // host: 'smtp.gmail.com',
    auth: {
        user: process.env.email,
        pass: process.env.password
    }
}));
console.log("Email: " + process.env.email + "\nPassword: " + process.env.password)
// API for contact form 
router.post("/test/add", async (req, res) => {
    try {
        // **** dont change above code, please wtite your router code below **** //
        let name = req.body.name;
        let email = req.body.email;
        let subject = req.body.subject;
        let message = req.body.message;
        //options
        const mailOptions = {
            from: process.env.email,
            to: process.env.email,                   // from req.body.to
            subject: subject,         //from req.body.subject
            text: message + "\n\n\nName: " +  name + "\nEmail: " + email            //from req.body.message
        };
        //delivery
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.status(400).send('Email Not Sent');
            } else {
                console.log('Email sent: ' + info.response);
                res.json('Email Sent');
            }
        });

        // **** dont change below code, write your code baove this only **** //
    } catch (error) {
        logger.log(req.path + ' : ' + error);
    }
});

app.use(router);

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});