# 🔐 Netlify Environment Variables Configuration

## MongoDB Connection String for Netlify

You need to add your MongoDB connection string as an environment variable in Netlify.

### Your MongoDB Connection String:

```
MONGODB_URI=mongodb+srv://reethika3101_db_user:C8VoP5DAUQjo4nky@cluster1.lq0dv36.mongodb.net/leads?retryWrites=true&w=majority
```

## 📋 Steps to Add Environment Variable in Netlify

### After You Deploy Your Site:

1. **Go to Netlify Dashboard**
   - Login to https://app.netlify.com
   - Select your deployed site

2. **Navigate to Environment Variables**
   - Go to **Site settings** (gear icon)
   - Click **Environment variables** in the left sidebar
   - Click **Add a variable**

3. **Add MONGODB_URI**
   - **Key**: `MONGODB_URI`
   - **Value**: `mongodb+srv://reethika3101_db_user:C8VoP5DAUQjo4nky@cluster1.lq0dv36.mongodb.net/leads?retryWrites=true&w=majority`
   - **Scopes**: Select "All scopes" or "Production" and "Deploy previews"
   - Click **Save**

4. **Trigger a New Deployment**
   - After adding the environment variable, go to **Deploys** tab
   - Click **Trigger deploy** > **Deploy site**
   - This ensures the environment variable is available to your Netlify Functions

## ✅ Verification

After deployment, test your API:

1. Visit: `https://your-site-name.netlify.app/.netlify/functions/api/health`
   - Should return: `{"status":"Server is running","timestamp":"..."}`

2. Test the form on your landing page
   - Submit a test lead
   - Check MongoDB Atlas to verify the lead was saved

## 🔒 Security Note

⚠️ **Keep this connection string secure!** 
- Never share it publicly
- Already added to `.gitignore` so it won't be committed to Git
- Only add it as an environment variable in Netlify

## 📝 Quick Copy for Netlify

Copy this for Netlify environment variable:

**Key**: `MONGODB_URI`

**Value**: 
```
mongodb+srv://reethika3101_db_user:C8VoP5DAUQjo4nky@cluster1.lq0dv36.mongodb.net/leads?retryWrites=true&w=majority
```