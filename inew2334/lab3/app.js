// app.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// new members
const members = [
    "Bob Johnson",
    "Sam Williams",
    "Sally Brown",
    "Tom Smith",
    "Lisa Davis",
    "Mike Wilson",
    "Karen Miller",
    "John Anderson"
];

// render index.ejs
app.get('/', (req, res) => {
    res.render('index', { welcomeMessage: 'Welcome to Adventures Online', members });
});

//server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
