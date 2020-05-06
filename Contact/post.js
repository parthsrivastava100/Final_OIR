const express=require('express');
const nodemailer=require('nodemailer');
const bodyParser=require('body-parser');
const app=express();
path=require('path');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res) => {
  res.send("Working right");
})
app.post('/send_mail',(req,res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host:'smtp.gmail.com',
        port:465,
        auth: {
          user: 'ancqueriesoir@gmail.com',
          pass: 'Ancoirquer267' 
        }
      });
    
      const mailOptions = {
        from: req.body.email,
        to: 'parthsrivastava100@gmail.com',
        subject: req.body.sub,
        text: req.body.mess
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.send(error);
        } else {
          res.send('Email sent: ' + info.response);
          res.send("Message sent!");
          res.end();
        }
      });
     

});



app.listen(3000,() => {
    console.log("Server Started!");
});