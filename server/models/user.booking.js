const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
	firstName:
	{
		type:String,
		required:true
	},
	email:
	{
		type: String,
		required: true,
		unique:true
	},
	street:
	{
		type: String,
		required: false
	},
	city:
	{
		type: String,
		required: false
	},
	state:
	{
		type: String,
		required: false,
		default:"Gujrat"
	},
	country:
	{
		type: String,
		required: true,
	},
	postalCode:
	{
		type:Number,
		required:true,
	},
	contactNumber:
	{
		type:String,
		required:true
	},
	checkIn:
	{
		type:Date,
		required:true
	},
	checkOut:
	{
		type:Date,
		required:true
	},
	roomType:
	{
		type:String,
		required:true,
		default:"simple"
	},
	noOfAdults:
	{
		type:Number,
		required:true,
		default:1
	},
	noOfChildren:
	{
		type:Number,
		required:false,
		default:1
	},
	speacialRequirement:[
	{
		type: String,
		required:false
	}],
	payment:
	{
		type:String,
		required:true
	}
},{timestamps:true});

const Book = mongoose.model("booking",userSchema);

module.exports = Book;