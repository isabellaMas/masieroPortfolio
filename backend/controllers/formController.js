const nodemailer = require('nodemailer');

exports.submitForm = (req, res) => {
  const { email } = req.body;

  let transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false, 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: `"Portfolio" <${process.env.PERSONAL_EMAIL}>`, 
    to: `${process.env.PERSONAL_EMAIL}`, 
    subject: 'New email from portfolio site', 
    text: `This email was inputted on your portfolio site: ${email}`, 
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Success');
    }
  });
};