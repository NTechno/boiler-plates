require("dotenv").config();

// routes.js
const router = require("express").Router();
const path = require("path");
const nodemailer = require("nodemailer");

const transport = {
  //this is the authentication for sending email.
  host: "smtp.gmail.com",
  port: 2525,
  secure: false,
  ssl:false,
  logger: true,
  debug: true,

  //create a .env file and define the process.env variables
  // with your credentials.
  auth: {
    user: process.env.SMTP_TO_EMAIL,
    pass: process.env.SMTP_TO_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  console.log("#####" , success);
  if (error) {
    //if error happened code ends here
    console.error(error);
  } else {
    //this means success
    console.log("Ready to send mail!");
  }
});

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Working" });
});

router.post("/", (req, res) => {
  //make mailable object
  console.log("Ready to send mail!" , req.body);

  const mail = {
    from: process.env.SMTP_FROM_EMAIL,
    to: process.env.SMTP_TO_EMAIL,
    subject: "New Contact Form Submission",
    text: `
          from:
          ${req.body.name}    

          contact details
          email: ${req.body.email}
          phone: ${req.body.tel}
    
          message:
          ${req.body.message}`,
  };
  transporter.sendMail(mail, (err, data) => {
      console.log("into the send mail" , data);
    if (err) {
      res.send({
        status: "fail",
        msg : err
      });
    } else {
      res.json({
        status: "success",
        msg : "mail is sent!!"
      });
    }
  });
});

// Answer API requests.
// router.use('/api', function (req, res ) {
//     res.set('Content-Type', 'application/json')
//     res.send('{"message":"Hello from the custom server!"}')    
// })

// All remaining requests return the React app, so it can 
// handle routing.0
router.use('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '/react-ui/build', 'index.html'))
})

module.exports = router
