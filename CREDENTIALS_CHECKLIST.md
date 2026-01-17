# 📝 Credentials Checklist

Use this checklist to ensure all required credentials and environment variables are configured before deployment.

## ✅ Required Credentials

### 1. MongoDB Atlas Connection String

**Status**: ⚠️ **REQUIRED - Not Configured**

**What you need:**
- MongoDB Atlas account (sign up at https://www.mongodb.com/cloud/atlas)
- MongoDB cluster created
- Database user with username and password
- Connection string formatted as:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/leads?retryWrites=true&w=majority
```

**Where to configure:**
- **Local Development**: Create `.env` file in `backend/` folder
- **Netlify**: Site Settings > Environment Variables > Add `MONGODB_URI`

**Instructions:**
1. Create MongoDB Atlas account
2. Create a new cluster (M0 free tier is fine)
3. Create database user:
   - Username: `your-username`
   - Password: `your-password` (save this!)
4. Whitelist IP addresses:
   - For Netlify: Add `0.0.0.0/0` (allows all IPs)
   - For local dev: Add your current IP address
5. Get connection string:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your actual password
   - Replace `<dbname>` with `leads` or your preferred database name

---

### 2. Netlify Site URL (Optional - Auto-detected)

**Status**: ✅ **Optional - Will be auto-detected**

**What you need:**
- Your Netlify site URL (e.g., `https://your-site.netlify.app`)

**Where to configure:**
- **Netlify**: Site Settings > Environment Variables > Add `REACT_APP_API_URL`

**Instructions:**
1. Deploy to Netlify first
2. Note your site URL
3. Add as environment variable `REACT_APP_API_URL`
4. Trigger a new deployment

**Note**: The frontend will auto-detect the URL if not set, but setting it explicitly is recommended.

---

## 🔐 Security Reminders

- ⚠️ **Never commit `.env` files to Git** (already in `.gitignore`)
- ⚠️ **Never share your MongoDB connection string publicly**
- ⚠️ **Use environment variables for all sensitive data**
- ⚠️ **Keep your MongoDB Atlas password secure**

---

## 📋 Pre-Deployment Checklist

Before deploying to Netlify, ensure:

- [ ] MongoDB Atlas account created
- [ ] MongoDB cluster created and running
- [ ] Database user created (username + password saved)
- [ ] IP addresses whitelisted in MongoDB Atlas
- [ ] Connection string copied and formatted correctly
- [ ] Environment variables ready to add in Netlify

---

## 🧪 Testing Your Credentials

### Test MongoDB Connection (Local)

1. Create `.env` file in `backend/` folder with your `MONGODB_URI`
2. Run `cd backend && npm install && npm start`
3. Check console for: `✅ MongoDB Connected Successfully`

### Test After Netlify Deployment

1. Visit: `https://your-site.netlify.app/.netlify/functions/api/health`
2. Should return: `{"status":"Server is running","timestamp":"..."}`
3. If error, check Netlify function logs and verify `MONGODB_URI` is set

---

## 🆘 Need Help?

- **MongoDB Atlas Setup**: See `DEPLOYMENT.md` Step 1
- **Environment Variables**: See `ENV_SETUP.md`
- **Netlify Deployment**: See `DEPLOYMENT.md` Step 3

---

## ✅ Configuration Status

Update this section as you configure:

- [ ] MongoDB Atlas account: `Not Started` / `In Progress` / `Complete`
- [ ] Connection string obtained: `Yes` / `No`
- [ ] Environment variables set in Netlify: `Yes` / `No`
- [ ] Deployment tested: `Yes` / `No`