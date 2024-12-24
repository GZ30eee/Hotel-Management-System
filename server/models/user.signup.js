const mongoose = require("mongoose");

const loginSchema = mongoose.Schema({
	firstName:
	{
		type:String,
		required:true
	},
	lastName:
	{
		type:String,
		required:false
	},
	mobileNumber:
	{
		type: String,
		unique: true,
		required: true
	},
	email:
	{
		type: String,
		unique: true,
		required: false
	},
	password:
	{
		type: String,
		required: true
	}
}, { timestamps: true });

Login = mongoose.model("logins",loginSchema);

module.exports = Login;