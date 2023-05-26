const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');
const port = 3000; // Set the desired port number

// Configure middleware to parse request body as JSON
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define API endpoint for form submission
app.post('/contact', (req, res) => {
  console.log('Received a contact form submission:', req.body);
  // Get the form data from request body
  const { name, email, phone, message } = req.body;

  // Create a transporter for sending emails
  const transporter = nodemailer.createTransport({
    // Configure the email transport (e.g., SMTP settings)
    // Consult Nodemailer documentation for details
    service: 'gmail',
  auth: {
    user: 'educatingslasher64@gmail.com', // Replace with your Gmail address
    pass: 'iamslasher12@' // Replace with your Gmail password or app-specific password
  }
  });

  // Prepare the email content
  const mailOptions = {
    from: email,
    to: 'educatingslasher64@gmail.com', // Set your email address
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Email sent successfully');
    }
  });
});
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
