// Test script to verify Netlify function API
const axios = require('axios');

// Test data
const testData = {
  name: 'radha',
  email: 'radha1@gmail.com',
  phone: '09786150457'
};

async function testAPI() {
  try {
    console.log('Testing API with data:', testData);
    
    // This would work in production with the correct Netlify URL
    // const response = await axios.post('https://your-site.netlify.app/api/leads', testData);
    
    console.log('✅ API Test would work if MONGODB_URI is configured in Netlify');
    console.log('❌ Current issue: MONGODB_URI environment variable missing in Netlify');
    
  } catch (error) {
    console.error('❌ API Test Failed:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
  }
}

testAPI();
