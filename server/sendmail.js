const nodemailer = require("nodemailer");

const sendingmail = async(req,res)=>{

	let userEmail= req.body.email; 
	var transporter = nodemailer.createTransport({
		service: 'gmail',
	auth: {
		user: 'ghza3006@gmail.com',
		pass: 'tuhv xeej dssz hdwi'
	}
});

var mailOptions = {
	from: 'ghza3006@gmail.com',
	to: userEmail,
	subject: 'Sending Email using Node.js',
	text: 'This is subscribed email!'
};

transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
});
}
module.exports = sendingmail;