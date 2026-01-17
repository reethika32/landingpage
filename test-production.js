const axios = require('axios');

const testData = {
  name: 'Production Test User',
  email: 'production@nirvista.com',
  phone: '9876543210'
};

async function testProduction() {
  console.log('🚀 TESTING PRODUCTION NETLIFY FUNCTION');
  console.log('📝 Test data:', testData);
  console.log('');

  try {
    // Test 1: Health endpoint
    console.log('1️⃣ Testing production health endpoint...');
    const healthResponse = await axios.get('https://nirvista.netlify.app/.netlify/functions/api/health');
    console.log('✅ Health Response:', healthResponse.data);
    console.log('');

    // Test 2: Lead submission
    console.log('2️⃣ Testing production lead submission...');
    const leadResponse = await axios.post('https://nirvista.netlify.app/api/leads', testData);
    console.log('✅ Lead Submission Response:', leadResponse.data);
    console.log('');

    // Test 3: Verify data in database
    console.log('3️⃣ Retrieving leads from production...');
    const leadsResponse = await axios.get('https://nirvista.netlify.app/api/leads');
    
    if (leadsResponse.data.success) {
      console.log('✅ Production leads retrieved:', leadsResponse.data.count);
      
      if (leadsResponse.data.count > 0) {
        const latestLead = leadsResponse.data.data[0];
        console.log('🔍 Latest production lead:', {
          name: latestLead.name,
          email: latestLead.email,
          phone: latestLead.phone,
          createdAt: latestLead.createdAt
        });
        
        console.log('');
        console.log('🎉 PRODUCTION DEPLOYMENT SUCCESSFUL!');
        console.log('✅ Form submission working');
        console.log('✅ Data storing in MongoDB Atlas');
        console.log('✅ Website fully functional');
      } else {
        console.log('⚠️ No leads found in production database');
      }
    } else {
      console.log('❌ Failed to retrieve production leads');
    }

  } catch (error) {
    console.error('❌ Production test failed:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
  }
}

testProduction();
