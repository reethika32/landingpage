# 🔍 Exactly Where to Find Your "leads" Database in MongoDB Atlas

## 📍 Step-by-Step Location Guide

### Current View:
You're in **Data Explorer** → **Cluster1**

You currently see these databases:
- `admin`
- `local` 
- `sample_mflix`
- `test`

---

## 🎯 Where "leads" Will Appear:

### **Right Here in Cluster1!**

Once you submit your **first lead** through the website form, a new database called `leads` will automatically appear in this same list, right below `test`.

### Your View Will Look Like This:

```
Cluster1
├── admin
├── local
├── sample_mflix
├── test
└── leads  ← NEW! Will appear here after first submission
```

---

## 📋 Exact Steps to Find Your Leads:

### **Step 1: Submit a Test Lead First**
1. Go to your website: **http://localhost:3000** (or your live URL)
2. Fill out the form:
   - Name: `Test User`
   - Email: `test@example.com`
   - Phone: `1234567890`
3. Click **"Get Started Now"**
4. Wait for success message ✅

### **Step 2: Refresh MongoDB Atlas**
1. Go back to MongoDB Atlas (where you are now)
2. Click the **"Refresh"** button (top right of the database table)
3. OR click **"Cluster1"** in the left sidebar to refresh

### **Step 3: Find "leads" Database**
After refreshing, you should now see:
- A new database called **`leads`** in the list!

### **Step 4: Open "leads" Database**
1. Click on **`leads`** in the list (or in the left sidebar)
2. It will expand to show collections

### **Step 5: Open "leads" Collection**
1. You'll see a collection called **`leads`** (same name as database)
2. Click on **`leads`** collection

### **Step 6: View Your Stored Data**
1. You'll now see all submitted leads!
2. Each document shows:
   - `_id`: Unique identifier
   - `name`: The name you submitted
   - `email`: The email you submitted
   - `phone`: The phone number you submitted
   - `createdAt`: Timestamp when it was saved

---

## 🗂️ Full Navigation Path:

```
MongoDB Atlas
└── Data Explorer (You are here)
    └── Cluster1
        └── leads ← Will appear here!
            └── leads (collection)
                └── Your documents (submitted form data)
```

---

## ⚠️ If "leads" Database Doesn't Appear:

### Option 1: Create It Manually

1. Click the green **"+ Create database"** button (top of the table)
2. Fill in:
   - **Database name**: `leads`
   - **Collection name**: `leads`
3. Click **"Create"**
4. Now it will appear in your list!

### Option 2: Wait for First Submission

MongoDB creates databases/collections automatically when data is first inserted. So if you haven't submitted a form yet, it won't exist. After your first submission:
- Database `leads` will be created
- Collection `leads` will be created
- Your data will be stored as a document

---

## 🎯 Quick Checklist:

- [ ] Submit a test lead through the website form
- [ ] Go back to MongoDB Atlas Data Explorer
- [ ] Click "Refresh" button
- [ ] Look for `leads` database in the list (right here under Cluster1)
- [ ] Click on `leads` database
- [ ] Click on `leads` collection
- [ ] See your submitted data! ✅

---

## 📸 What You Should See:

Once `leads` appears, clicking on it will show:

**Collection: leads**
- **1 document** (or more if you submitted multiple)
- Click on it to see:
  ```json
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
  ```

---

## ✅ Summary:

**Location**: `Data Explorer` → `Cluster1` → `leads` database → `leads` collection

**If not visible**: Submit a lead first, then refresh MongoDB Atlas!

**It will appear right here in the same list where you see `admin`, `local`, `sample_mflix`, and `test`!**