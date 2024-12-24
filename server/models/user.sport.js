const mongoose = require("mongoose");

const sportSchema = mongoose.Schema({
	name:
	{
		type: String,
		required: true
	},
	email:
	{
		type: String,
		unique: true,
		required: true
	},
	mobile:
	{
		type: Number,
		required: true

	},
});

const Sport = mongoose.model("sports",sportSchema);

module.exports = Sport;