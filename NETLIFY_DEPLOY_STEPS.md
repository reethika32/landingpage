# 🚀 Netlify Deployment - Step by Step Guide

Follow these exact steps to deploy your website live on Netlify!

---

## ✅ Prerequisites Checklist

Before deploying, make sure you have:
- [x] ✅ Code pushed to GitHub (or GitLab/Bitbucket)
- [x] ✅ MongoDB connection string ready
- [x] ✅ Netlify account (free account works!)

---

## 📋 Step-by-Step Deployment

### **Step 1: Push Code to GitHub**

If you haven't already, push your code to GitHub:

```bash
# If you haven't created a GitHub repo yet:
# 1. Go to https://github.com/new
# 2. Create a new repository (name: mern-leads-landing-page)
# 3. Don't initialize with README (we already have one)

# Then in your terminal:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub details.

---

### **Step 2: Login to Netlify**

1. Go to **https://app.netlify.com**
2. Click **"Sign up"** or **"Log in"**
   - You can sign up with your GitHub account (recommended)
   - Or use email/password

---

### **Step 3: Create New Site from Git**

1. Once logged in, click **"Add new site"** button (top right)
2. Select **"Import an existing project"**
3. Choose **"GitHub"** (or GitLab/Bitbucket if you use those)
4. **Authorize Netlify** to access your GitHub account if prompted
5. Select your repository: **"mern-leads-landing-page"** (or whatever you named it)

---

### **Step 4: Configure Build Settings**

Netlify should auto-detect settings, but verify these:

**Build command:**
```
cd frontend && npm install && npm run build
```

**Publish directory:**
```
frontend/build
```

**Advanced build settings** (click "Show advanced"):
- **Node version**: `18` (or latest LTS)

Click **"Show advanced"** and make sure these are set correctly!

---

### **Step 5: Add Environment Variable (CRITICAL!)**

**Before clicking "Deploy site"**, add your MongoDB connection string:

1. Scroll down to **"Environment variables"** section
2. Click **"Add a variable"**
3. Add:
   - **Key**: `MONGODB_URI`
   - **Value**: `mongodb+srv://reethika3101_db_user:C8VoP5DAUQjo4nky@cluster1.lq0dv36.mongodb.net/leads?retryWrites=true&w=majority`
4. Click **"Add"**

**This is CRITICAL!** Without this, your API won't work!

---

### **Step 6: Deploy!**

1. Click **"Deploy site"** button
2. Wait for the build to complete (usually 2-5 minutes)
3. You'll see build logs in real-time

---

### **Step 7: Get Your Live URL**

Once deployment is complete:

1. You'll see: **"Site deploy in progress..."** then **"Published"**
2. Your site will be live at: `https://random-name-123456.netlify.app`
3. You can change this name later in **"Site settings"** → **"Change site name"**

---

### **Step 8: Verify It's Working**

1. **Test the landing page:**
   - Visit your Netlify URL
   - Check that the form loads correctly

2. **Test the API:**
   - Visit: `https://your-site.netlify.app/api/health`
   - Should return: `{"status":"Server is running","timestamp":"..."}`

3. **Test form submission:**
   - Fill out the form on your live site
   - Submit a test lead
   - Check MongoDB Atlas to verify it was stored!

---

## 🔧 Important: MongoDB Atlas IP Whitelisting

For Netlify deployment to work, your MongoDB Atlas must allow connections from anywhere:

1. Go to **MongoDB Atlas** → **Network Access**
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (adds `0.0.0.0/0`)
4. Click **"Confirm"**

**This allows Netlify's servers to connect to your database!**

---

## 🎯 Quick Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Netlify account created
- [ ] Site created from Git repository
- [ ] Build settings configured:
  - [ ] Build command: `cd frontend && npm install && npm run build`
  - [ ] Publish directory: `frontend/build`
  - [ ] Node version: `18`
- [ ] Environment variable added: `MONGODB_URI`
- [ ] MongoDB Atlas IP whitelisted: `0.0.0.0/0`
- [ ] Site deployed successfully
- [ ] Tested form submission on live site
- [ ] Verified data stored in MongoDB Atlas

---

## 🐛 Troubleshooting

### Build Fails?

- Check build logs in Netlify dashboard
- Make sure build command is correct: `cd frontend && npm install && npm run build`
- Verify Node version is set to `18`

### API Not Working?

- Verify `MONGODB_URI` environment variable is set
- Check MongoDB Atlas IP whitelist includes `0.0.0.0/0`
- Check Netlify function logs in dashboard

### Form Submission Fails?

- Check browser console (F12) for errors
- Verify API endpoint: `https://your-site.netlify.app/api/health`
- Check MongoDB connection string is correct

---

## 📝 After Deployment

Your live website will be at: `https://your-site-name.netlify.app`

**Your website is now LIVE and storing leads in MongoDB! 🎉**

---

## 🔄 Updating Your Site

To update your live site:
1. Make changes to your code
2. Push to GitHub: `git push`
3. Netlify will automatically redeploy! (if auto-deploy is enabled)

---

## 📞 Need Help?

- Netlify Docs: https://docs.netlify.com/
- Netlify Status: https://www.netlifystatus.com/
- Check Netlify function logs in dashboard for API errors