const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();

app.use(express.json());//middleware

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Feedback App!');
});

const authRoutes = require('./routes/auth');
console.log("test");
console.log(authRoutes);
console.log("test");
// Routes
app.use('/api/auth', authRoutes); // Add the auth routes



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


