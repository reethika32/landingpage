# Environment Variables Setup Guide

## Required Environment Variables

You need to set up the following environment variables for this project to work:

### 1. MongoDB Connection String

**Variable Name**: `MONGODB_URI`

**Format**:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/leads?retryWrites=true&w=majority
```

**How to get it**:
1. Sign up for [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier available)
2. Create a new cluster
3. Create a database user (username and password)
4. Whitelist IP addresses (use `0.0.0.0/0` for Netlify or add your specific IPs)
5. Click "Connect" > "Connect your application"
6. Copy the connection string and replace `<password>` with your database password
7. Replace `<dbname>` with `leads` or your preferred database name

**Example**:
```
MONGODB_URI=mongodb+srv://myuser:mypassword123@cluster0.abc123.mongodb.net/leads?retryWrites=true&w=majority
```

### 2. Frontend API URL (Optional - for Netlify)

**Variable Name**: `REACT_APP_API_URL`

**Format**:
```
REACT_APP_API_URL=https://your-site-name.netlify.app
```

**When to set**: Only needed if you want to explicitly set the API URL. Otherwise, the frontend will construct it automatically.

## Setting Environment Variables

### For Local Development

#### Backend (`.env` file in `backend/` folder)
Create a file named `.env` in the `backend/` directory:

```env
MONGODB_URI=your_mongodb_connection_string_here
PORT=5000
```

#### Frontend (`.env` file in `frontend/` folder)
Create a file named `.env` in the `frontend/` directory (optional):

```env
REACT_APP_API_URL=http://localhost:5000
```

### For Netlify Deployment

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** > **Build & deploy** > **Environment**
3. Click **Add a variable**
4. Add each variable:
   - Key: `MONGODB_URI`
   - Value: Your MongoDB Atlas connection string
   
   - Key: `REACT_APP_API_URL` (optional)
   - Value: `https://your-site-name.netlify.app`

5. Click **Save**

## Security Notes

⚠️ **IMPORTANT**: 
- Never commit `.env` files to Git
- Never share your MongoDB connection string publicly
- Always use environment variables for sensitive data
- The `.gitignore` file is already configured to exclude `.env` files

## Testing Your Connection

After setting up the environment variables:

1. **Local Development**: Run `npm run dev` and check console for MongoDB connection status
2. **Netlify**: After deployment, visit `https://your-site.netlify.app/.netlify/functions/api/health` to test the API

## Troubleshooting

### MongoDB Connection Issues

- Verify your MongoDB Atlas cluster is running
- Check that your IP address is whitelisted in MongoDB Atlas
- Ensure your database username and password are correct
- Verify the connection string format is correct

### Netlify Deployment Issues

- Make sure environment variables are set in Netlify dashboard
- Redeploy after adding new environment variables
- Check Netlify function logs for errors