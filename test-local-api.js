const axios = require('axios');

const testData = {
  name: 'radha',
  email: 'radha1@gmail.com',
  phone: '09786150457'
};

async function testLocalAPI() {
  console.log('🔍 Testing Local API...');
  console.log('📝 Test data:', testData);
  console.log('');

  try {
    // Test health endpoint
    console.log('1️⃣ Testing health endpoint...');
    const healthResponse = await axios.get('http://localhost:5000/health');
    console.log('✅ Health check:', healthResponse.data);
    console.log('');

    // Test lead submission
    console.log('2️⃣ Testing lead submission...');
    const leadResponse = await axios.post('http://localhost:5000/leads', testData);
    console.log('✅ Lead submission successful:', leadResponse.data);
    console.log('🎯 DATA STORED IN MONGODB ATLAS!');
    console.log('');

    // Test retrieving leads
    console.log('3️⃣ Testing lead retrieval...');
    const leadsResponse = await axios.get('http://localhost:5000/leads');
    console.log('✅ Leads retrieved:', leadsResponse.data);
    console.log(`📊 Total leads in database: ${leadsResponse.data.count}`);

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
  }
}

testLocalAPI();
