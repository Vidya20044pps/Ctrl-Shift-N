
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const cors = require('cors');

// Connect to MongoDB
mongoose.connect('mongodb+srv://rachitsrirkst:L6ZY91ErF6Cji1JP@cluster0.oa0oqlk.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Mongoose schema and model for users
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const User = mongoose.model('Lawyer', UserSchema);


app.use(express.json());
app.use(cors());


app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  
  const user = new User({ email, password });
  await user.save();

 
  res.status(201).json({ message: 'User registered successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
