// Simple test to check individual endpoints
const axios = require('axios');

async function testEndpoints() {
  console.log('🔍 Testing individual endpoints...');
  
  try {
    // Test main site
    console.log('1️⃣ Testing main site...');
    const siteResponse = await axios.get('https://nirvista.netlify.app');
    console.log('✅ Main site works:', siteResponse.status);
  } catch (error) {
    console.log('❌ Main site failed:', error.response?.status);
  }

  try {
    // Test health endpoint
    console.log('2️⃣ Testing health endpoint...');
    const healthResponse = await axios.get('https://nirvista.netlify.app/.netlify/functions/api/health');
    console.log('✅ Health endpoint works:', healthResponse.data);
  } catch (error) {
    console.log('❌ Health endpoint failed:', error.response?.status);
    console.log('Error data:', error.response?.data);
  }

  try {
    // Test lead submission
    console.log('3️⃣ Testing lead submission...');
    const testData = { name: 'radha', email: 'radha1@gmail.com', phone: '09786150457' };
    const leadResponse = await axios.post('https://nirvista.netlify.app/api/leads', testData);
    console.log('✅ Lead submission works:', leadResponse.data);
  } catch (error) {
    console.log('❌ Lead submission failed:', error.response?.status);
    console.log('Error data:', error.response?.data);
  }
}

testEndpoints();
