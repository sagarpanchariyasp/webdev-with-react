const express = require('express');
const router = express.Router();

// Route to handle contact form submissions
router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all fields' });
  }

  // You can send an email here using a service like Nodemailer or save the message in a database.
  // For now, let's just log the details
  console.log(`New contact request from ${name}, email: ${email}, message: ${message}`);

  // Return success response
  return res.status(200).json({ success: 'Message received!' });
});

module.exports = router;
