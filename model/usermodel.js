const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    date_of_birth: Date,
    school: String
})

const usermodel = mongoose.model('user',userSchema);

module.exports = usermodel;