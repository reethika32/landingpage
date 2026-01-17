const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://reethika3101_db_user:C8VoP5DAUQjo4nky@cluster1.lq0dv36.mongodb.net/leads?retryWrites=true&w=majority';

async function verifyDirectly() {
  console.log('🔍 VERIFYING MONGODB DIRECTLY');
  console.log('📍 Connecting to MongoDB Atlas...');
  
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB Atlas!');
    
    // Define schema
    const leadSchema = new mongoose.Schema({
      name: String,
      email: String,
      phone: String,
      createdAt: { type: Date, default: Date.now }
    });
    
    const Lead = mongoose.model('Lead', leadSchema);
    
    // Get all leads
    const leads = await Lead.find().sort({ createdAt: -1 });
    console.log(`📊 Total leads found: ${leads.length}`);
    
    if (leads.length > 0) {
      console.log('🔍 Latest 5 entries:');
      leads.slice(0, 5).forEach((lead, index) => {
        console.log(`${index + 1}. ${lead.name} - ${lead.email} - ${lead.phone}`);
      });
      
      // Check for our specific test entry
      const testEntry = leads.find(lead => 
        lead.name === 'radha' && 
        lead.email === 'radha1@gmail.com' && 
        lead.phone === '09786150457'
      );
      
      if (testEntry) {
        console.log('✅ FOUND YOUR TEST ENTRY!');
        console.log(`🆔 ID: ${testEntry._id}`);
        console.log(`⏰ Created: ${testEntry.createdAt}`);
        console.log('🎯 DATA IS IN MONGODB ATLAS!');
      } else {
        console.log('❌ Test entry not found in recent data');
      }
    } else {
      console.log('❌ No leads found in database');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Connection closed');
  }
}

verifyDirectly();
