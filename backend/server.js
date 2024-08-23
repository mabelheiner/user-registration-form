const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})

//current user emails
let userEmails = ['mabel@gmail.com', 'stanley@gmail.com', 'dipper@gmail.com', 'stanford@gmail.com']

app.get('/register', (req, res) => {
    let message = `Current emails in use: <br><t>`;
    userEmails.map((email) => {
        message += `${email} <br>`
    })
    res.json(userEmails);
})

app.post('/register', (req, res) => {
    const userEmail = req.body.email;
    const userName = req.body.firstName + ' ' + req.body.lastName;
    const password = req.body.password;

    if (userEmails.includes(req.body.email)) {
        res.send('Email already in use. Please login.');
    }
    else {
        res.send(`${req.body.firstName} ${req.body.lastName} is now signed up with the email: ${req.body.email}! Congratulations and welcome!`);
    }
})