const express= require('express');
const bodyParser= require('body-parser');

const nodemailer=require('nodemailer');
const path=require('path');
const app=express();

//View Engine Setup



//Adding Static folder

//Adding body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/contact',(req,res) =>{
  res.sendFile(path.join(__dirname+'/Contact/contact_us.html'));

});



app.post('/send' ,(req,res) => {
    const output=`
<p> You have a new contact request</p>
<h3> Contact Details</h3>
<ul>
<li>Name: ${req.body.name}</li>
<li>Email: ${req.body.email}</li>
<li>Phone: ${req.body.phone}</li>
<li>Message: ${req.body.message}</li>
</ul>
`;

var nodemailer = require('nodemailer');
var mailOptions = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
      user: 'parthsrivastava100@gmail.com',
      pass: 'GONDOLAS'
  },
  from: 'parthsrivastava100@gmail.com',
  to: 'parthsri@iitk.ac.in',
  subject: 'yoooo',
  text: output
};

mailer = nodemailer.createTransport(mailOptions);
mailer.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  };
});
});
app.listen(3000,() => {
  console.log("Server Started..");
});
