const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle POST requests to the '/contact' endpoint
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Perform any necessary processing or validation on the form data
  
  // Example response: sending a JSON response with a success message
  res.json({ success: true, message: 'Thank you for your message!' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});