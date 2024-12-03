const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = "mongodb+srv://Pasindu:Pasindu1999@travel002.kpbdh.mongodb.net/?retryWrites=true&w=majority&appName=Travel002";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// User Schema and Model
const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

// API endpoint to handle registration
app.post("/api/register", async (req, res) => {
  try {
    const { firstName, lastName, email, mobile, password } = req.body;

    // Create a new user
    const newUser = new User({ firstName, lastName, email, mobile, password });

    // Save to database
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    if (error.code === 11000) {
      // Handle duplicate email error
      res.status(400).json({ error: "Email already exists" });
    } else {
      res.status(500).json({ error: "Failed to register user" });
    }
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
