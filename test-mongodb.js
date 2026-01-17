const mongoose = require('mongoose');

// Test MongoDB connection
const MONGODB_URI = 'mongodb+srv://reethika3101_db_user:C8VoP5DAUQjo4nky@cluster1.lq0dv36.mongodb.net/leads?retryWrites=true&w=majority';

console.log('🔍 Testing MongoDB connection...');
console.log('📍 URI:', MONGODB_URI);

async function testConnection() {
  try {
    console.log('📡 Connecting to MongoDB...');
    
    await mongoose.connect(MONGODB_URI);
    
    console.log('✅ MongoDB Connected Successfully!');
    
    // Test creating a simple document
    const testSchema = new mongoose.Schema({
      name: String,
      email: String,
      phone: String,
      createdAt: { type: Date, default: Date.now }
    });
    
    const TestModel = mongoose.model('Test', testSchema);
    
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890'
    };
    
    const result = await TestModel.create(testData);
    console.log('✅ Test document created:', result);
    console.log('🎯 DATA SUCCESSFULLY STORED IN MONGODB ATLAS!');
    
    // Clean up
    await TestModel.deleteOne({ _id: result._id });
    console.log('🧹 Test document cleaned up');
    
  } catch (error) {
    console.error('❌ MongoDB Connection Error:');
    console.error('Error Code:', error.code);
    console.error('Error Message:', error.message);
    
    if (error.code === 'ENOTFOUND') {
      console.log('💡 Issue: DNS resolution failed - check internet connection');
    } else if (error.code === 'ECONNREFUSED') {
      console.log('💡 Issue: Connection refused - check MongoDB Atlas settings');
    } else if (error.message.includes('authentication')) {
      console.log('💡 Issue: Authentication failed - check username/password');
    } else if (error.message.includes('unauthorized')) {
      console.log('💡 Issue: Unauthorized - check database permissions');
    }
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Connection closed');
  }
}

testConnection();
