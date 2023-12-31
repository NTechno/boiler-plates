let express = require("express"),
  path = require("path"),
  nodeMailer = require("nodemailer"),
  bodyParser = require("body-parser");

let app = express();

app.use(express.static("src"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/send-email", function (req, res) {
  console.log("into the send email");
  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // should be replaced with real sender's account
      user: "nidhi.gadhavi@technostacks.com",
      pass: "#Gadhavi@301%",
    },
  });
  let mailOptions = {
    // should be replaced with real recipient's account
    to: "nidhimail@yopmail.com",
    subject: req.body.subject,
    body: req.body.message,
  };

  console.log("created");

  transporter.sendMail(mailOptions, (error, info) => {
    console.log("#$%#$%#%", info);
    console.log("Error", error);
    if (error) {
      return console.log(error);
    }
    console.log("Message %s sent: %s", info.messageId, info.response);
  });

  res.writeHead(301, { Location: "index.html" });
  res.end();
});

let server = app.listen(8081, function () {
  let port = server.address().port;
  console.log("Server started at http://localhost:%s", port);
});
