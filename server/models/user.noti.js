const mogoose = require("mongoose");
const notiSchema = mogoose.Schema({
	email:
	{
		type:String,
		required:true,
		unique:true
	}
});

const Noti = mogoose.model("notification",notiSchema);

module.exports = Noti;