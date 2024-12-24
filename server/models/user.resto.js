const mongoose = require("mongoose");

const restoSchema = mongoose.Schema({
	name :
	{
		type:String,
		required:true
	},
	email :
	{
		type:String,
		unique:true,
		required:true
	},
	mobile :
	{
		type:Number,
		required:true

	},
	person :
	{
		type:Number,
		required:true,
		default:1
	},
});

const Resto = mongoose.model("restos",restoSchema);

module.exports = Resto;