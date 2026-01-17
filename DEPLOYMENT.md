# Netlify Deployment Guide

Complete step-by-step guide to deploy your MERN stack landing page on Netlify.

## 📋 Pre-Deployment Checklist

- [ ] MongoDB Atlas account created
- [ ] MongoDB cluster set up
- [ ] Database user created
- [ ] IP addresses whitelisted (use `0.0.0.0/0` for Netlify)
- [ ] MongoDB connection string ready
- [ ] Code pushed to GitHub repository

## 🚀 Deployment Steps

### Step 1: Prepare MongoDB

1. **Sign up for MongoDB Atlas** (if not done)
   - Go to https://www.mongodb.com/cloud/atlas
   - Create a free account (M0 free tier available)

2. **Create a Cluster**
   - Choose a cloud provider and region
   - Click "Create Cluster"

3. **Create Database User**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Create username and password (SAVE THESE!)
   - Set user privileges to "Atlas admin" or "Read and write to any database"
   - Click "Add User"

4. **Whitelist IP Addresses**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (adds `0.0.0.0/0`)
   - Or add specific IPs for better security
   - Click "Confirm"

5. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
   - Replace `<dbname>` with `leads` or your preferred database name

   Example:
   ```
   mongodb+srv://username:yourpassword@cluster0.abc123.mongodb.net/leads?retryWrites=true&w=majority
   ```

### Step 2: Push Code to GitHub

1. **Initialize Git** (if not done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: MERN landing page"
   ```

2. **Create GitHub Repository**
   - Go to https://github.com/new
   - Create a new repository (e.g., `mern-leads-landing-page`)
   - Do NOT initialize with README (we already have one)

3. **Push Code**
   ```bash
   git remote add origin https://github.com/yourusername/mern-leads-landing-page.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Deploy to Netlify

#### Option A: Deploy via Netlify Dashboard (Recommended)

1. **Sign up/Login to Netlify**
   - Go to https://app.netlify.com
   - Sign up or login (can use GitHub account)

2. **Create New Site**
   - Click "Add new site" > "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your repository

3. **Configure Build Settings**
   - **Build command**: `cd frontend && npm install && npm run build`
   - **Publish directory**: `frontend/build`
   - Click "Show advanced" and add:
     - **Node version**: `18` (or latest LTS)

4. **Add Environment Variables**
   - Go to "Site settings" > "Environment variables"
   - Click "Add a variable"
   - Add:
     - **Key**: `MONGODB_URI`
     - **Value**: Your MongoDB connection string (from Step 1)
   - Add (optional):
     - **Key**: `REACT_APP_API_URL`
     - **Value**: `https://your-site-name.netlify.app` (update after deployment)

5. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete

6. **Update API URL** (if needed)
   - After deployment, note your site URL (e.g., `https://amazing-app.netlify.app`)
   - Go to "Site settings" > "Environment variables"
   - Update `REACT_APP_API_URL` to your actual Netlify URL
   - Trigger a new deployment

#### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy to production
netlify deploy --prod
```

### Step 4: Verify Deployment

1. **Test the Landing Page**
   - Visit your Netlify URL (e.g., `https://your-site.netlify.app`)
   - Verify the page loads correctly

2. **Test the API**
   - Visit: `https://your-site.netlify.app/.netlify/functions/api/health`
   - Should return: `{"status":"Server is running","timestamp":"..."}`

3. **Test Lead Submission**
   - Fill out the form on your landing page
   - Submit with test data
   - Verify success message appears

4. **Verify Database**
   - Go to MongoDB Atlas
   - Click "Browse Collections"
   - Verify your test lead was saved

## 🔧 Troubleshooting

### Build Fails

- **Issue**: Build command error
  - **Solution**: Verify build command is `cd frontend && npm install && npm run build`

- **Issue**: Node version error
  - **Solution**: Set Node version to 18 in Netlify build settings

### API Not Working

- **Issue**: 404 on API endpoints
  - **Solution**: 
    - Verify `netlify.toml` has correct redirects
    - Check function logs in Netlify dashboard

- **Issue**: MongoDB connection error
  - **Solution**: 
    - Verify `MONGODB_URI` environment variable is set
    - Check MongoDB Atlas IP whitelist includes `0.0.0.0/0`
    - Verify connection string format is correct

### Form Submission Fails

- **Issue**: CORS errors
  - **Solution**: Check `netlify/functions/api.js` has CORS middleware enabled

- **Issue**: 500 Internal Server Error
  - **Solution**: 
    - Check Netlify function logs
    - Verify MongoDB connection string is correct
    - Check environment variables are set

## 📝 Post-Deployment

1. **Update README** with your live URL
2. **Test all functionality** thoroughly
3. **Monitor function logs** in Netlify dashboard
4. **Set up custom domain** (optional)

## 🔗 Useful Links

- [Netlify Documentation](https://docs.netlify.com/)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [React Build & Deploy](https://create-react-app.dev/docs/deployment/)

## ✅ Deployment Complete!

Once deployed, your landing page will be live at:
`https://your-site-name.netlify.app`

**Remember**: Update the `REACT_APP_API_URL` environment variable with your actual Netlify URL for optimal performance!