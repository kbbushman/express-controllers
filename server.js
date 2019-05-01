const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 4000;

// CONTROLLERS
const contactsCtrl = require('./controllers/contactsCtrl');
const postsCtrl = require('./controllers/postsCtrl');


// ----------------------------------- MIDDLEWARE ----------------------------------- //

// CORS
// Express CORS Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// ----------------------------------- HTML ROUTES ----------------------------------- //

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Expres Server</h1>');
});

// ----------------------------------- API ROUTES ----------------------------------- //

// Contacts
app.use('/api/v1/contacts', contactsCtrl);

// Posts
app.use('/api/v1/posts', postsCtrl);

// ----------------------------------- START SERVER ----------------------------------- //

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
