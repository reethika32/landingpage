# 📋 NETLIFY ENVIRONMENT VARIABLES - STEP BY STEP GUIDE

## 🚀 Step 1: Go to Netlify Dashboard
1. Open your browser
2. Go to: **https://app.netlify.com**
3. Login with your GitHub account

## 📂 Step 2: Find Your Site
1. You'll see your sites list
2. Look for: **nirvista** (your site name)
3. Click on your site name

## ⚙️ Step 3: Find Site Settings
1. At the top of your site page, look for **3 tabs**: "Overview", "Deploys", "Site settings"
2. Click on **"Site settings"** (it has a gear icon ⚙️)
3. This will take you to the settings page

## 🔧 Step 4: Find Environment Variables
1. On the left sidebar, scroll down
2. Look for **"Build & deploy"** section
3. Under that, click **"Environment variables"**
4. Or directly: https://app.netlify.com/sites/nirvista/settings/variables

## ➕ Step 5: Add the Variable
1. Click the **"Add a variable"** button
2. Fill in EXACTLY:
   - **Key**: `MONGODB_URI`
   - **Value**: `mongodb+srv://reethika3101_db_user:C8VoP5DAUQjo4nky@cluster1.lq0dv36.mongodb.net/leads?retryWrites=true&w=majority`
   - **Scope**: Select "All scopes" (check all boxes)
3. Click **"Save"**

## 🚀 Step 6: Redeploy
1. Go back to your site main page
2. Click on **"Deploys"** tab
3. Click **"Trigger deploy"** → **"Deploy site"**
4. Wait for deployment to complete (2-3 minutes)

## ✅ Step 7: Test
1. Visit: https://nirvista.netlify.app
2. Fill out the form
3. Submit - should work!

---

## 🎯 DIRECT LINKS (if you're logged in)
- Your site: https://app.netlify.com/sites/nirvista
- Environment variables: https://app.netlify.com/sites/nirvista/settings/variables
- Deploy page: https://app.netlify.com/sites/nirvista/deploys

## 📱 What You'll See

### Site Settings Location:
```
[Overview] [Deploys] [Site settings ⚙️]
```

### Environment Variables Section:
```
Build & deploy
├── Build settings
├── Continuous Deployment
├── Environment variables  ← CLICK HERE
├── Build hooks
└── Post processing
```

### Add Variable Form:
```
Key: [MONGODB_URI]
Value: [mongodb+srv://reethika3101_db_user:C8VoP5DAUQjo4nky@cluster1.lq0dv36.mongodb.net/leads?retryWrites=true&w=majority]
Scope: ☑ All scopes

[Save] [Cancel]
```

## 🆘 If You're Still Stuck
1. Make sure you're logged into Netlify
2. Your site should be named "nirvista"
3. Look for the gear icon (⚙️) for settings
4. Environment variables are under "Build & deploy"

**This is the final step - once you add this variable, your form will work perfectly!** 🎉
