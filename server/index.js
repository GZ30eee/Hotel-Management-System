const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Book = require("./models/user.booking");
const Login = require("./models/user.signup");
const Noti = require("./models/user.noti");
const Resto = require("./models/user.resto");
const Sport = require("./models/user.sport");
const sendingmail = require("./sendmail");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://ghanshyamsinh:Ghanshyam%40123@mycluster.rjev2yz.mongodb.net/hmsDB").then(() => {
	console.log("mongo database connected successfully!");
}).catch(err => {
	console.log("mongo database not connected " + err);
});

app.get('/', (req, res) => {
	res.send("<h1>Hello Hemang this is booking server!</h1>");
});


//booking database code
app.get('/booking', async (req, res) => {
	try {
		const bookings = await Book.find({});
		res.status(200).json(bookings);
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
})
app.post('/booking', async (req, res) => {
	try {
		const booking = await Book.create(req.body);
		res.status(200).json(booking);
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
});
app.get('/booking/:id', async (req, res) => {
	try {
		const booking = await Book.findById(req.params.id);
		res.status(200).json(booking);
	}
	catch (err) {
		console.log(err);
		res.status(500).json({ message: err.message });
	}
});
app.put('/booking/:id', async (req, res) => {
	try {
		const booking = await Book.findByIdAndUpdate(req.params.id, req.body);
		if (!booking) {
			return res.status(404).json({ message: `cannot find the booking on ${req.params.id} `});
		}
		const updatedBooking = await Book.findById(req.params.id);
		res.status(200).json(updatedBooking);
	}
	catch (err) {
		console.log(err);
		res.status(500).json({ message: err.message });
	}
});
app.delete("/booking/:id", async (req, res) => {
	try {
		const booking = await Book.findByIdAndDelete(req.params.id);
		if (!booking) {
			res.status(404).json({ message:` can not delete booking on ${req.params.id}` });
		}
		res.status(200).json(booking);
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
});
app.delete("/signup/:id",async(req,res)=>{
	try
	{
		const deletedUser = Login.findByIdAndDelete(req.params.id);
		if (!deletedUser) {
			res.status(404).json({ message: `can not delete user on ${req.params.id}` });
		}
		res.status(200).json(deletedUser);
	}
	catch(err)
	{
		res.status(500).json({message:err.message});
	}
});

//login database codes
app.post("/signup", async (req, res) => {
	try {
		const user = await Login.create(req.body);
		res.status(200).json(user);
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
});
app.get("/signup",async(req,res)=>{
	try
	{
		const user = await Login.find({email:"hemang@gmail.com"});
		res.status(200).json(user);
	}
	catch(err)
	{
		res.status(500).json({message:err.message});
	}
});
//notification sending request
app.post("/noti", async (req, res) => {
	try {
		const user = await Noti.create(req.body);
		res.status(200).json(user);
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
});
app.delete("/noti/:id", async (req, res) => {
	try {
		const user = await Noti.findByIdAndDelete(req.params.id);
		if (!user) {
			res.status(404).json({ message: `can not delete email on ${req.params.id}` });
		}
		res.status(200).json(user);
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
});
//send email
app.post("/sendemail", sendingmail);

//restaurant requests
app.post("/resto",async(req,res)=>{
	try {
		const user = await Resto.create(req.body);
		res.status(200).json(user);
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
});
app.put('/resto/:id', async (req, res) => {
	try {
		const user = await Resto.findByIdAndUpdate(req.params.id, req.body);
		if (!user) {
			return res.status(404).json({ message: `cannot find the user on ${req.params.id} `});
		}
		const userX = await Resto.findById(req.params.id);
		res.status(200).json(userX);
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
});
app.delete("/resto/:id", async (req, res) => {
	try {
		const user = await Resto.findByIdAndDelete(req.params.id);
		if (!user) {
			res.status(404).json({ message: `can not delete user on ${req.params.id}` });
		}
		res.status(200).json(user);
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
});

//sports requests
app.post("/sport", async (req, res) => {
	try {
		const user = await Sport.create(req.body);
		res.status(200).json(user);
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
});
app.put('/sport/:id', async (req, res) => {
	try {
		const user = await Sport.findByIdAndUpdate(req.params.id, req.body);
		if (!user) {
			return res.status(404).json({ message:` cannot find the user on ${req.params.id}` });
		}
		const userX = await Sport.findById(req.params.id);
		res.status(200).json(userX);
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
});
app.delete("/sport/:id", async (req, res) => {
	try {
		const user = await Sport.findByIdAndDelete(req.params.id);
		if (!user) {
			res.status(404).json({ message: `can not delete user on ${req.params.id}` });
		}
		res.status(200).json(user);
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
});

const PORT = process.env.PORT | 8000;
app.listen(PORT, () => {
	console.log("Server running on port 8000");
});