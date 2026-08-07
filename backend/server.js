const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const app = express();
dotenv.config({ path: path.resolve(__dirname, '../.env') });

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch((err) => {
  console.warn('MongoDB connection failed:', err.message);
});

const db = mongoose.connection;
db.on('error', (err) => console.warn('MongoDB connection error:', err.message));
db.once('open', () => console.log('MongoDB connected'));

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/projects'));
app.use('/api', require('./routes/certificates'));
app.use('/api', require('./routes/messages'));
app.use('/api', require('./routes/resume'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
