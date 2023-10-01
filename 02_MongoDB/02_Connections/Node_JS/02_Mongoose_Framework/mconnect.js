const mongoose = require('mongoose');

// Connect with the database
mongoose.connect('mongodb://localhost:27017/fruitDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Check connection
const db = mongoose.connection;

// Event listener for a successful connection
db.once('open', () => {
    
    console.log('Connected to MongoDB');

    mongoose.connection.close();

});

// Event listener for connection errors
db.on('error', (error) => {

    console.error('Error connecting to MongoDB:', error);
    
});
