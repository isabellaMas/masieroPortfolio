const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());

const port = 3001; 


const nodemailer = require('nodemailer');



app.post('/submit-form', (req, res) => {

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: 'bellaPortfolio@zohomail.com',
      pass: process.env.EMAIL_PASSWORD
    }
  });


  const { email } = req.body;

  const mailOptions = {
    from: 'bellaPortfolio@zohomail.com',
    to: 'icm268@nyu.edu',
    subject: 'New email from portfolio site',
    text: `This email was inputted on your portfolio site: ${email}`,
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Form submitted successfully!' });
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
