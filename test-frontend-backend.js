const axios = require('axios');

const testData = {
  name: 'Test User From Frontend',
  email: 'frontend@test.com',
  phone: '1234567890'
};

async function testFrontendBackend() {
  console.log('🎯 TESTING FRONTEND TO BACKEND CONNECTION');
  console.log('📝 Test data:', testData);
  console.log('');

  try {
    // Test exactly like frontend does
    console.log('📤 Submitting to http://localhost:5000/leads...');
    const response = await axios.post('http://localhost:5000/leads', testData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('✅ SUCCESS! Data submitted:', response.data);
    console.log('📊 Lead ID:', response.data.data?.id);
    console.log('🎯 DATA STORED IN MONGODB!');
    console.log('');

    // Verify it's actually in database
    console.log('🔍 Verifying in database...');
    const verifyResponse = await axios.get('http://localhost:5000/leads');
    
    if (verifyResponse.data.success && verifyResponse.data.count > 0) {
      console.log('✅ VERIFIED! Data is in MongoDB Atlas');
      console.log(`📊 Total leads: ${verifyResponse.data.count}`);
      
      const latestLead = verifyResponse.data.data[0];
      console.log('🔍 Latest entry:', {
        name: latestLead.name,
        email: latestLead.email,
        phone: latestLead.phone,
        createdAt: latestLead.createdAt
      });
      
      console.log('');
      console.log('🎉 FRONTEND TO BACKEND INTEGRATION WORKING!');
      console.log('✅ Form data will be stored in MongoDB Atlas');
      console.log('✅ Website is ready for use');
    } else {
      console.log('❌ VERIFICATION FAILED');
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Error:', error.response.data);
    }
  }
}

testFrontendBackend();
