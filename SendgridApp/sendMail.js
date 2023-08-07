const express = require("express");
const { append } = require("express/lib/response");
const { sendMail } = require("./email/account");

const router = new express.Router();
function between(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

router.post("/sendmail", (req, res) => {
	console.log("send email api call!!!");
	const user = req.body;
	try {
		let customNumbre = between(12, 866);
		sendMail(user.email, user.name, customNumbre);
		res.status(200).send({ message: "Mail Sent" });
	} catch (error) {
		console.log("into error");
		res.status(500).send({ error });
	}
});

module.exports = router;
