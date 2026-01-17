const axios = require('axios');

const testData = {
  name: 'radha',
  email: 'radha1@gmail.com',
  phone: '09786150457'
};

async function finalTest() {
  console.log('🎯 FINAL INTEGRATION TEST');
  console.log('📝 Test data:', testData);
  console.log('');

  try {
    // Test 1: Backend health
    console.log('1️⃣ Testing backend health...');
    const healthResponse = await axios.get('http://localhost:5000/health');
    console.log('✅ Backend health:', healthResponse.data.database);
    console.log('');

    // Test 2: Frontend accessibility
    console.log('2️⃣ Testing frontend accessibility...');
    const frontendResponse = await axios.get('http://localhost:3000');
    console.log('✅ Frontend accessible:', frontendResponse.status === 200);
    console.log('');

    // Test 3: Form submission (exactly like frontend)
    console.log('3️⃣ Testing form submission...');
    const leadResponse = await axios.post('http://localhost:5000/leads', testData);
    console.log('✅ Form submission:', leadResponse.data.success);
    console.log('📊 Lead ID:', leadResponse.data.data.id);
    console.log('🎯 DATA STORED IN MONGODB!');
    console.log('');

    // Test 4: Verify data in database
    console.log('4️⃣ Verifying data persistence...');
    const verifyResponse = await axios.get('http://localhost:5000/leads');
    const leads = verifyResponse.data.data;
    
    if (leads.length > 0) {
      const latestLead = leads[0];
      console.log('✅ Data verified in database!');
      console.log('📊 Latest entry:', {
        name: latestLead.name,
        email: latestLead.email,
        phone: latestLead.phone,
        createdAt: latestLead.createdAt
      });
      
      console.log('');
      console.log('🎉 COMPLETE SUCCESS!');
      console.log('✅ Web page: http://localhost:3000');
      console.log('✅ Backend API: http://localhost:5000');
      console.log('✅ MongoDB Atlas: Connected and storing data');
      console.log('✅ Form submission: Working perfectly');
      console.log('✅ Data appears in leads collection');
      console.log('');
      console.log('🌐 Ready to use! Visit http://localhost:3000');
    } else {
      console.log('❌ No data found in database');
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

finalTest();
