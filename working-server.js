const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'https://nirvista.netlify.app'],
  credentials: true
}));
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = 'mongodb+srv://reethika3101_db_user:C8VoP5DAUQjo4nky@cluster1.lq0dv36.mongodb.net/leads?retryWrites=true&w=majority';

console.log('🔗 Starting server...');
console.log('📍 Connecting to MongoDB Atlas...');

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
.then(() => {
  console.log('✅ MongoDB Connected Successfully!');
  console.log('🎯 Database: leads collection ready');
})
.catch((err) => {
  console.error('❌ MongoDB Connection Error:', err);
  console.log('💡 Check: Internet connection, MongoDB credentials, or Atlas settings');
});

// Lead Schema
const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    minlength: [10, 'Phone number must be at least 10 digits']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Lead = mongoose.model('Lead', leadSchema);

// Routes
app.get('/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
  res.json({ 
    status: 'Server is running', 
    timestamp: new Date(),
    database: dbStatus,
    port: PORT
  });
});

app.post('/leads', async (req, res) => {
  try {
    console.log('📝 New lead submission:', req.body);
    
    const { name, email, phone } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide name, email, and phone number' 
      });
    }

    // Create and save lead
    const newLead = new Lead({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim()
    });

    const savedLead = await newLead.save();
    
    console.log('✅ Lead saved successfully!');
    console.log('📊 Name:', savedLead.name);
    console.log('📧 Email:', savedLead.email);
    console.log('📞 Phone:', savedLead.phone);
    console.log('🆔 ID:', savedLead._id);
    console.log('🎯 DATA STORED IN MONGODB ATLAS!');

    res.status(201).json({
      success: true,
      message: 'Lead submitted successfully!',
      data: {
        id: savedLead._id,
        name: savedLead.name,
        email: savedLead.email,
        phone: savedLead.phone,
        createdAt: savedLead.createdAt
      }
    });

  } catch (error) {
    console.error('❌ Error saving lead:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
      error: error.message
    });
  }
});

app.get('/leads', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 }).limit(50);
    console.log(`📊 Retrieved ${leads.length} leads from database`);
    
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
  console.log(`🚀 Server running successfully on port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/health`);
  console.log(`📝 Submit leads: http://localhost:${PORT}/leads`);
  console.log(`🌐 Frontend should connect to: http://localhost:${PORT}`);
  console.log('🎯 Ready to store data in MongoDB Atlas!');
});
