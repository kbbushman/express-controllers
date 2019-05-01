const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: String,
  username: String,
  email: String,
  website: String
});

const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;
