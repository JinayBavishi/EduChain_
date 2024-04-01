const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Server is running');
});

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

    // Write the updated data back to the JSON file
    await fs.writeFile('./users.json', JSON.stringify(usersData, null, 2));

    res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
