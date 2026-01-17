// Debug script to test form submission
const axios = require('axios');

// Test data from your form
const testData = {
  name: 'radha',
  email: 'radha1@gmail.com', 
  phone: '09786150457'
};

async function testFormSubmission() {
  console.log('🔍 Testing form submission...');
  console.log('📝 Test data:', testData);
  
  try {
    // Test 1: Check if Netlify function exists
    console.log('\n1️⃣ Testing Netlify function health endpoint...');
    const healthResponse = await axios.get('https://nirvista.netlify.app/.netlify/functions/api/health');
    console.log('✅ Health check:', healthResponse.data);
    
    // Test 2: Test lead submission
    console.log('\n2️⃣ Testing lead submission...');
    const leadResponse = await axios.post('https://nirvista.netlify.app/api/leads', testData);
    console.log('✅ Lead submission successful:', leadResponse.data);
    
  } catch (error) {
    console.error('❌ Error occurred:');
    console.error('Status:', error.response?.status);
    console.error('Status Text:', error.response?.statusText);
    console.error('Error Data:', error.response?.data);
    console.error('Message:', error.message);
    
    // Analyze the error
    if (error.response?.status === 500) {
      console.log('\n🔍 Analysis: 500 error suggests MongoDB connection issue');
      console.log('💡 Solution: Check MONGODB_URI environment variable in Netlify');
    } else if (error.response?.status === 404) {
      console.log('\n🔍 Analysis: 404 error suggests function not found');
      console.log('💡 Solution: Check Netlify function deployment');
    }
  }
}

testFormSubmission();
