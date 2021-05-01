const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extend: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/jobs', require('./routes/api/jobs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
