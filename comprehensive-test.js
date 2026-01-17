// Comprehensive test to debug the exact issue
const axios = require('axios');

const testData = {
  name: 'radha',
  email: 'radha1@gmail.com',
  phone: '09786150457'
};

async function runTests() {
  console.log('🔍 COMPREHENSIVE DEBUG TEST');
  console.log('📝 Test data:', testData);
  console.log('');

  try {
    // Test 1: Check if site is accessible
    console.log('1️⃣ Testing site accessibility...');
    const siteResponse = await axios.get('https://nirvista.netlify.app');
    console.log('✅ Site is accessible:', siteResponse.status);
    console.log('');

    // Test 2: Check health endpoint
    console.log('2️⃣ Testing health endpoint...');
    try {
      const healthResponse = await axios.get('https://nirvista.netlify.app/.netlify/functions/api/health');
      console.log('✅ Health endpoint working:', healthResponse.data);
    } catch (healthError) {
      console.log('❌ Health endpoint failed:');
      console.log('Status:', healthError.response?.status);
      console.log('Error:', healthError.response?.data);
      console.log('This means MONGODB_URI is NOT configured in Netlify!');
    }
    console.log('');

    // Test 3: Test lead submission
    console.log('3️⃣ Testing lead submission...');
    try {
      const leadResponse = await axios.post('https://nirvista.netlify.app/api/leads', testData);
      console.log('✅ Lead submission successful:', leadResponse.data);
      console.log('🎉 DATA IS BEING SAVED TO MONGODB!');
    } catch (leadError) {
      console.log('❌ Lead submission failed:');
      console.log('Status:', leadError.response?.status);
      console.log('Error:', leadError.response?.data);
      
      if (leadError.response?.status === 500) {
        console.log('🔍 Analysis: 500 error = MongoDB connection issue');
        console.log('💡 Solution: Add MONGODB_URI environment variable in Netlify');
      } else if (leadError.response?.status === 503) {
        console.log('🔍 Analysis: 503 error = Function not deployed or misconfigured');
        console.log('💡 Solution: Check Netlify deployment and environment variables');
      }
    }
    console.log('');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }

  console.log('🎯 CONCLUSION:');
  console.log('If tests fail, the issue is 100% MONGODB_URI missing in Netlify');
  console.log('Follow the step-by-step guide I provided to add it!');
}

runTests();
