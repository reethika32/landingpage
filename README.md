# MERN Stack Landing Page - Lead Generation

A professional, fully responsive landing page built with the MERN stack for capturing and storing leads. Deployed on Netlify with serverless functions.

## 🚀 Features

- **Professional Landing Page**: Modern, responsive design with gradient background
- **Lead Capture Form**: Collects Name, Email, and Phone number
- **Backend API**: Express.js server with MongoDB integration
- **Serverless Functions**: Netlify Functions for backend API
- **Database**: MongoDB connection for storing leads
- **Fully Deployed**: Ready for Netlify deployment

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- Netlify account
- Git

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd IP2
```

### 2. Install Dependencies

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3. Configure Environment Variables

#### For Backend (Local Development)

Create a `.env` file in the `backend` folder:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/leads?retryWrites=true&w=majority
PORT=5000
```

#### For Netlify Deployment

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** > **Environment variables**
3. Add the following variable:
   - `MONGODB_URI`: Your MongoDB Atlas connection string

#### For Frontend (Netlify)

In Netlify, also add:
   - `REACT_APP_API_URL`: Your Netlify site URL (e.g., `https://your-site.netlify.app`)

### 4. MongoDB Setup

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user
4. Whitelist your IP address (or use `0.0.0.0/0` for Netlify)
5. Get your connection string and replace placeholders in `.env`

### 5. Local Development

```bash
# Run both frontend and backend concurrently
npm run dev

# Or run separately:
npm run server  # Backend on http://localhost:5000
npm run client  # Frontend on http://localhost:3000
```

## 🌐 Netlify Deployment

### Option 1: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Or deploy directly
netlify deploy --prod
```

### Option 2: Deploy via Git Integration

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click **"New site from Git"**
4. Select your repository
5. Configure build settings:
   - **Build command**: `cd frontend && npm install && npm run build`
   - **Publish directory**: `frontend/build`
6. Add environment variables in site settings
7. Deploy!

### Netlify Build Settings

- **Build command**: `cd frontend && npm install && npm run build`
- **Publish directory**: `frontend/build`
- **Node version**: `18` (set in netlify.toml)

### Required Environment Variables in Netlify

1. `MONGODB_URI` - Your MongoDB Atlas connection string
2. `REACT_APP_API_URL` - Your Netlify site URL (for API calls from frontend)

## 📁 Project Structure

```
IP2/
├── backend/
│   ├── server.js          # Express server (for local dev)
│   ├── package.json
│   └── .env               # Environment variables (local)
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LeadForm.js
│   │   │   └── LeadForm.css
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── netlify/
│   └── functions/
│       └── api.js         # Serverless function
├── netlify.toml           # Netlify configuration
├── package.json           # Root package.json
└── README.md
```

## 🔧 API Endpoints

### Health Check
```
GET /.netlify/functions/api/health
```

### Submit Lead
```
POST /.netlify/functions/api/leads
Body: {
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890"
}
```

### Get All Leads
```
GET /.netlify/functions/api/leads
```

## 🎨 Features

- ✅ Professional gradient design
- ✅ Responsive layout (mobile, tablet, desktop)
- ✅ Form validation
- ✅ Success/error messaging
- ✅ Loading states
- ✅ MongoDB integration
- ✅ Serverless functions
- ✅ CORS enabled

## 📝 Important Notes

1. **MongoDB URI**: Replace the placeholder in environment variables with your actual MongoDB Atlas connection string
2. **API URL**: Update `REACT_APP_API_URL` in Netlify environment variables to match your deployed site URL
3. **Local Development**: The frontend uses `REACT_APP_API_URL` from environment or defaults to the API URL
4. **Netlify Functions**: The API runs as serverless functions on Netlify (see `netlify/functions/api.js`)

## 🔒 Security Notes

- Never commit `.env` files to Git
- Use environment variables for sensitive data
- Validate all inputs on the server
- Use MongoDB Atlas IP whitelisting for production

## 📞 Support

For issues or questions, please check:
- MongoDB Atlas documentation
- Netlify documentation
- React documentation

## 📄 License

This project is open source and available for use.

---

**Deployment URL**: Update this after deploying to Netlify

**Status**: ✅ Ready for deployment