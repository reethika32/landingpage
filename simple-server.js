const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = 'mongodb+srv://reethika3101_db_user:C8VoP5DAUQjo4nky@cluster1.lq0dv36.mongodb.net/leads?retryWrites=true&w=majority';

console.log('🔗 Connecting to MongoDB...');

mongoose.connect(MONGODB_URI)
.then(() => {
  console.log('✅ MongoDB Connected Successfully!');
  console.log('📍 Database: leads');
})
.catch((err) => {
  console.error('❌ MongoDB Connection Error:', err);
  process.exit(1);
});

// Lead Schema
const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Lead = mongoose.model('Lead', leadSchema);

// Routes
app.get('/health', (req, res) => {
  res.json({ 
    status: 'Server is running', 
    timestamp: new Date(),
    database: 'Connected to MongoDB'
  });
});

app.post('/leads', async (req, res) => {
  try {
    console.log('📝 Received lead submission:', req.body);
    
    const { name, email, phone } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide name, email, and phone number' 
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }

    // Create and save lead
    const newLead = new Lead({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim()
    });

    const savedLead = await newLead.save();
    
    console.log('✅ Lead saved successfully:', savedLead);
    console.log('🎯 Data stored in MongoDB Atlas!');

    res.status(201).json({
      success: true,
      message: 'Lead submitted successfully!',
      data: savedLead
    });

  } catch (error) {
    console.error('❌ Error saving lead:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
      error: error.message
    });
  }
});

app.get('/leads', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    console.log(`📊 Found ${leads.length} leads in database`);
    
    res.json({
      success: true,
      count: leads.length,
      data: leads
    });
  } catch (error) {
    console.error('❌ Error fetching leads:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching leads',
      error: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/health`);
  console.log(`📝 Submit leads: http://localhost:${PORT}/leads`);
  console.log('🎯 Ready to store data in MongoDB!');
});
