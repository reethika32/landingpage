# 📊 How to Check if Data is Stored in Database

This guide shows you **3 ways** to verify that form submissions are being stored in your MongoDB database.

---

## Method 1: View Leads Page (Easiest - On Your Website)

### On Localhost:
1. Go to **http://localhost:3000**
2. Click the **"📋 View Stored Leads"** button at the bottom of the page
3. You'll see all submitted leads in a table format

### On Live Netlify Site:
1. Visit your deployed Netlify URL (e.g., `https://your-site.netlify.app`)
2. Click **"📋 View Stored Leads"** button
3. View all leads stored in your database

**This is the easiest way to verify data storage!**

---

## Method 2: Check MongoDB Atlas Directly (Most Reliable)

### Steps:

1. **Login to MongoDB Atlas**
   - Go to https://cloud.mongodb.com
   - Sign in with your account

2. **Navigate to Your Cluster**
   - Click on your cluster (e.g., "Cluster1")

3. **Browse Collections**
   - Click **"Browse Collections"** button
   - If you see a database called `leads`, click on it
   - If you don't see it, click **"Add My Own Data"** and create:
     - **Database Name**: `leads`
     - **Collection Name**: `leads`

4. **View Your Data**
   - You should see a collection called `leads`
   - Click on it to see all submitted leads
   - Each document will show:
     - `_id`: Unique identifier
     - `name`: Full name
     - `email`: Email address
     - `phone`: Phone number
     - `createdAt`: Timestamp

5. **Verify Data**
   - Submit a test lead through your form
   - Refresh the MongoDB Atlas page
   - You should see the new lead appear!

**This is the most reliable way to verify data is stored correctly!**

---

## Method 3: Use API Endpoint (For Developers)

### Test API Directly:

#### On Localhost:
```
GET http://localhost:5000/api/leads
```

#### On Netlify:
```
GET https://your-site.netlify.app/api/leads
```

### How to Test:

**Using Browser:**
- Just open the URL in your browser
- You'll see JSON data with all leads

**Using Command Line (curl):**
```bash
# Localhost
curl http://localhost:5000/api/leads

# Netlify
curl https://your-site.netlify.app/api/leads
```

**Using Browser Developer Tools:**
1. Open your website
2. Press `F12` to open Developer Tools
3. Go to **Console** tab
4. Type:
   ```javascript
   fetch('http://localhost:5000/api/leads')
     .then(res => res.json())
     .then(data => console.log(data));
   ```

---

## ✅ Verification Checklist

After submitting a test lead, verify:

- [ ] Success message appears on the form
- [ ] Lead appears in "View Stored Leads" page
- [ ] Lead appears in MongoDB Atlas database
- [ ] API endpoint returns the lead data
- [ ] Data includes: name, email, phone, createdAt timestamp

---

## 🔧 Troubleshooting

### If Data is NOT Storing:

1. **Check Backend Server is Running**
   - Localhost: Check terminal for "✅ MongoDB Connected Successfully"
   - Netlify: Check function logs in Netlify dashboard

2. **Check MongoDB Connection**
   - Verify `.env` file has correct `MONGODB_URI`
   - Verify Netlify has `MONGODB_URI` environment variable
   - Test connection: `http://localhost:5000/api/health`

3. **Check MongoDB Atlas IP Whitelist**
   - Go to MongoDB Atlas > Network Access
   - Make sure your IP is whitelisted (or use `0.0.0.0/0` for all IPs)

4. **Check Browser Console**
   - Press `F12` > Console tab
   - Look for any error messages

5. **Check Network Tab**
   - Press `F12` > Network tab
   - Submit form and check if API call succeeded (status 201)

---

## 📝 Test Data Example

Try submitting this test data:

```
Name: John Doe
Email: john.doe@example.com
Phone: +1 234-567-8900
```

After submission, verify it appears in all 3 methods above!

---

## 🎯 Quick Test Flow

1. **Submit a test lead** through the form
2. **See success message** ✅
3. **Click "View Stored Leads"** button
4. **See your lead in the table** ✅
5. **Check MongoDB Atlas** to verify in database ✅

**If all 3 methods show your data, it's working perfectly!** 🎉