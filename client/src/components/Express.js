const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors module
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Load users data
let usersData = require('./users.json');

// POST endpoint to handle sign-up
app.post('/api/signup', async (req, res) => {
  try {
    const newUser = req.body;

    // Append the new user to the existing data
    usersData.push(newUser);

    // Write the updated data back to the users.json file
    fs.writeFile('./users.json', JSON.stringify(usersData, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
        res.status(500).json({ message: 'Failed to write user data to file' });
      } else {
        console.log('User data written to file successfully');
        res.status(201).json({ message: 'User signed up successfully' });
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
