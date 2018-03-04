const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const logger = require('morgan');
const nodemailer = require('nodemailer');
const app = express();



app.use(express.static(__dirname + '/build/'))
app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get("*", (req,res) => {
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})

app.post('/send', (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", // hostname
  secure:false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  tls: {
     ciphers:'SSLv3'
  },
    auth: {
        user: 'mladenskrbicLaMbA3@outlook.com', // generated ethereal user
        pass: '**********'  // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Portfolio" <mladenskrbicLaMbA3@outlook.com>', // sender address
      to: 'mladenskrbicLaMbA3@gmail.com', // list of receivers
      subject: 'job offer?', // Subject line
      text: '', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(err);
        res.send('There was an error sending the email');
        return;

      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      res.send("GOOD");
  });
  });

  app.listen(port, function() {
  console.log("listening on port: ", port);
})
