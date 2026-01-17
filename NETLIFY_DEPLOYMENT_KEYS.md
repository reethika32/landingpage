# 🔑 NETLIFY DEPLOYMENT - ENVIRONMENT VARIABLES

## 🎯 **Required Environment Variables**

### **1. MONGODB_URI** (CRITICAL)
This is the most important variable for database connectivity.

**Key**: `MONGODB_URI`

**Value**: 
```
mongodb+srv://reethika3101_db_user:C8VoP5DAUQjo4nky@cluster1.lq0dv36.mongodb.net/leads?retryWrites=true&w=majority
```

**Purpose**: Connects your Netlify functions to MongoDB Atlas database

---

## 🚀 **HOW TO ADD IN NETLIFY**

### **Step 1: Go to Netlify Dashboard**
1. Visit: https://app.netlify.com
2. Login with your GitHub account
3. Select your site: `nirvista.netlify.app`

### **Step 2: Add Environment Variables**
1. Go to **Site settings** (gear icon ⚙️)
2. Click **Environment variables** in left sidebar
3. Click **Add a variable**

### **Step 3: Configure MONGODB_URI**
1. **Key**: `MONGODB_URI`
2. **Value**: `mongodb+srv://reethika3101_db_user:C8VoP5DAUQjo4nky@cluster1.lq0dv36.mongodb.net/leads?retryWrites=true&w=majority`
3. **Scope**: Check **"All scopes"** ☑️
4. Click **Save**

### **Step 4: Deploy**
1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Deploy site**
3. Wait for deployment to complete

---

## 🔧 **OPTIONAL VARIABLES**

### **REACT_APP_API_URL** (Optional)
If you want to override the API URL for testing:

**Key**: `REACT_APP_API_URL`
**Value**: `https://your-site.netlify.app`

**Purpose**: Override frontend API endpoint (usually not needed)

---

## 🎯 **DEPLOYMENT CHECKLIST**

### **Before Deployment:**
- [ ] MONGODB_URI added to Netlify environment variables
- [ ] All changes pushed to GitHub
- [ ] Netlify build settings configured

### **After Deployment:**
- [ ] Site builds successfully
- [ ] Functions deploy without errors
- [ ] Form submission works
- [ ] Data appears in MongoDB Atlas

---

## 📋 **QUICK COPY-PASTE**

### **For Netlify Environment Variables:**
```
Key: MONGODB_URI
Value: mongodb+srv://reethika3101_db_user:C8VoP5DAUQjo4nky@cluster1.lq0dv36.mongodb.net/leads?retryWrites=true&w=majority
```

### **Direct Links** (when logged in):
- Environment variables: https://app.netlify.com/sites/nirvista/settings/variables
- Deploys: https://app.netlify.com/sites/nirvista/deploys
- Functions: https://app.netlify.com/sites/nirvista/functions

---

## 🎉 **EXPECTED RESULT**

After adding `MONGODB_URI` and deploying:

✅ **Form Submission**: Works perfectly
✅ **Database Storage**: Data saved to MongoDB Atlas
✅ **User Experience**: Success messages displayed
✅ **Data Persistence**: Leads appear in database immediately

---

## 🔍 **TROUBLESHOOTING**

### **If deployment fails:**
1. Check `MONGODB_URI` spelling exactly
2. Verify MongoDB Atlas allows connections from anywhere
3. Check Netlify function logs for errors
4. Ensure all scopes are selected

### **If form doesn't work:**
1. Check browser console for JavaScript errors
2. Verify API endpoint is accessible
3. Check network tab for failed requests
4. Test health endpoint: `/.netlify/functions/api/health`

---

## 🎯 **FINAL REMINDER**

**The MONGODB_URI environment variable is the KEY to making your website work!**

Without it: ❌ No database connection
With it: ✅ Perfect form submission and data storage

**Add this exact value to Netlify and your website will work perfectly!** 🚀
