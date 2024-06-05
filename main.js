const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET route to echo back the data
app.get('/echo', (req, res) => {
    // Check if the request contains a 'data' query parameter
    const data = req.body;

    if (!data) {
        return res.status(400).json({ error: 'No data provided' });
    }

    try {
        // Attempt to parse data as JSON
        const jsonData = JSON.parse(data);
        // If parsing successful, send back JSON response
        res.json(jsonData);
    } catch (error) {
        // If parsing failed, treat data as string and send back as is
        res.send(data);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
