const express = require('express');
const bodyParser = require('body-parser'); // import body-parser
const app = express();
const PORT = process.env.PORT || 3000;

const { MongoClient } = require('mongodb');

// Connection URI. Will need to update location once hosted remotely
const uri = 'mongodb://localhost:27017/webpage_data';

// Create a new MongoClient
const client = new MOngoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the database
async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database: ', error);
    }
}

// Connect to database
connectToDatabase();

// User body-parser to parse messages
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());

// Define route for handling POST requests (form submission)
app.post('/submit', (req, res) => {
    // Access data from submitted form
    const formData = req.body; 
    // Log received data to the console
    console.log('Received form data: ', formData);
    // Process data from form and store in database
        // TODO
    

    // Confirmation
    res.status(200).send('Form submitted successfully!');
});

// Start server to listen for messages
app.listen(PORT, () => {
    console.log('Server running at http://localhost:${PORT}/');
});