const express = require('express');
const bodyParser = require('body-parser'); // import body-parser
const app = express();
const PORT = process.env.PORT || 3000;

const { MongoClient } = require('mongodb');

// Connection URI. Will need to update location once hosted remotely
const uri = 'mongodb://localhost:27017/webpage_data';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

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
app.post('/submit', async (req, res) => {
    // Access data from submitted form
    const formData = req.body; 

    // Access database
    try {
        const database = client.db('webpage_data');
        const collection = database.collection('form_entries');

        await collection.insertOne(formData);
        console.log('Form data stored in database', formData);  // Confirmation message
        res.status(200).send('Form submitted and data stored successfully');
    } catch (error) {
        console.error('Error storing form data:', error);   // Error message
        res.status(500).send('Error storing form data');
    }
});

// Start server to listen for messages
app.listen(PORT, () => {
    console.log('Server running at http://localhost:${PORT}/');
});