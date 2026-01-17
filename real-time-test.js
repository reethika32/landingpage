const axios = require('axios');

// Simulate exactly what the frontend form does
const formData = {
  name: 'radha',
  email: 'radha1@gmail.com', 
  phone: '09786150457'
};

async function realTimeTest() {
  console.log('🎯 REAL-TIME FORM SUBMISSION TEST');
  console.log('📝 Simulating website form submission...');
  console.log('📊 Data to submit:', formData);
  console.log('');

  try {
    console.log('📤 Sending POST request to backend...');
    console.log('🔗 URL: http://localhost:5000/leads');
    
    const response = await axios.post('http://localhost:5000/leads', formData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      timeout: 10000
    });

    console.log('✅ SUCCESS! Backend response:');
    console.log('📊 Status:', response.status);
    console.log('📝 Message:', response.data.message);
    console.log('🆔 Lead ID:', response.data.data?.id);
    console.log('👤 Name:', response.data.data?.name);
    console.log('📧 Email:', response.data.data?.email);
    console.log('📞 Phone:', response.data.data?.phone);
    console.log('⏰ Created:', response.data.data?.createdAt);
    console.log('');
    console.log('🎯 DATA STORED IN MONGODB ATLAS!');
    console.log('🔍 You should now see this entry in MongoDB Atlas:');
    console.log(`   - Name: ${response.data.data?.name}`);
    console.log(`   - Email: ${response.data.data?.email}`);
    console.log(`   - Phone: ${response.data.data?.phone}`);
    console.log(`   - ID: ${response.data.data?.id}`);
    console.log('');
    console.log('📱 Check your MongoDB Atlas Data Explorer now!');
    console.log('🔄 Refresh the leads collection if needed');

  } catch (error) {
    console.error('❌ SUBMISSION FAILED!');
    console.error('🔍 Error:', error.message);
    if (error.response) {
      console.error('📊 Status:', error.response.status);
      console.error('📝 Error Data:', error.response.data);
    }
  }
}

realTimeTest();
