const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mpv33:uV7Pe6CLrRFw4Eb2@cluster0.8jpev.mongodb.net/codeial_db?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: codeial MongoDB');
});


module.exports = db;
