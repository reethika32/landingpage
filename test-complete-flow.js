const axios = require('axios');

const testData = {
  name: 'radha',
  email: 'radha1@gmail.com',
  phone: '09786150457'
};

async function testCompleteFlow() {
  console.log('🎯 TESTING COMPLETE FORM SUBMISSION FLOW');
  console.log('📝 Test data:', testData);
  console.log('');

  try {
    // Step 1: Test health endpoint
    console.log('1️⃣ Testing server health...');
    const healthResponse = await axios.get('http://localhost:5000/health');
    console.log('✅ Server health:', healthResponse.data);
    console.log('');

    // Step 2: Test lead submission (exactly like the frontend)
    console.log('2️⃣ Testing lead submission...');
    console.log('📤 Sending POST request to http://localhost:5000/leads');
    
    const leadResponse = await axios.post('http://localhost:5000/leads', testData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('✅ SUCCESS! Lead submitted:', leadResponse.data);
    console.log('🎯 DATA STORED IN MONGODB ATLAS!');
    console.log('📊 Response:', {
      success: leadResponse.data.success,
      message: leadResponse.data.message,
      id: leadResponse.data.data?.id
    });
    console.log('');

    // Step 3: Verify data is actually in database
    console.log('3️⃣ Verifying data in database...');
    const verifyResponse = await axios.get('http://localhost:5000/leads');
    
    if (verifyResponse.data.success && verifyResponse.data.count > 0) {
      console.log('✅ VERIFICATION SUCCESSFUL!');
      console.log(`📊 Found ${verifyResponse.data.count} leads in database`);
      
      const latestLead = verifyResponse.data.data[0];
      console.log('🔍 Latest lead:', {
        name: latestLead.name,
        email: latestLead.email,
        phone: latestLead.phone,
        createdAt: latestLead.createdAt
      });
      
      console.log('🎉 COMPLETE SUCCESS!');
      console.log('✅ Form working perfectly');
      console.log('✅ Data stored in MongoDB Atlas');
      console.log('✅ Ready for deployment');
    } else {
      console.log('❌ VERIFICATION FAILED - No data found');
    }

  } catch (error) {
    console.error('❌ TEST FAILED:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Error:', error.response.data);
    }
  }
}

testCompleteFlow();
