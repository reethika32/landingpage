# 📍 Where to Find and Check "repo" Scope in GitHub

Step-by-step guide to find and check the `repo` scope for your Personal Access Token.

---

## 🎯 Location: GitHub Personal Access Token Settings

### **Direct Link:**
https://github.com/settings/tokens

---

## 📋 Step-by-Step Instructions:

### **Step 1: Go to Token Settings**

1. **Login to GitHub.com**
2. **Click your profile picture** (top right corner)
3. **Click "Settings"** (in the dropdown menu)

### **Step 2: Navigate to Developer Settings**

1. **Scroll down** in the left sidebar
2. **Click "Developer settings"** (at the bottom of the sidebar)

### **Step 3: Go to Personal Access Tokens**

1. **Click "Personal access tokens"** (in the left sidebar under "Developer settings")
2. **Click "Tokens (classic)"** (first option)

### **Step 4: Create or Edit Token**

#### **To CREATE a NEW token:**
1. Click **"Generate new token"** button
2. Click **"Generate new token (classic)"** (if you see that option)

#### **To EDIT an EXISTING token:**
1. **Find your token** in the list (e.g., "Nirvista Project")
2. **Click on the token name** to view it
3. **You CANNOT edit tokens** - you must create a new one

---

## ✅ Where to Find "repo" Scope:

### **On Token Creation/Edit Page:**

1. **Scroll down** to the **"Select scopes"** section
2. Look for the checkbox labeled:
   ```
   ✅ repo
      Full control of private repositories
   ```

### **Exact Location:**

The scopes section looks like this:

```
Select scopes

[ ] repo
    Full control of private repositories
    
[ ] workflow
    Update GitHub Action workflows
    
[ ] write:packages
    Upload packages to GitHub Package Registry
    
... (more options)
```

---

## 🎯 What You Need to Check:

### **For Pushing Code, You MUST Check:**

```
✅ repo
   Full control of private repositories
```

**This is the ONLY required scope for pushing code!**

---

## 📸 Visual Guide:

### **Navigation Path:**

```
GitHub.com
└── Profile Picture (top right)
    └── Settings
        └── Developer settings (bottom left)
            └── Personal access tokens
                └── Tokens (classic)
                    └── Generate new token / Edit token
                        └── Select scopes section
                            └── ✅ repo (CHECK THIS!)
```

---

## ✅ Quick Checklist:

When creating/editing token, make sure:

- [ ] **"repo"** checkbox is **CHECKED** ✅
- [ ] Description says: **"Full control of private repositories"**
- [ ] Token name: `Nirvista Project` (or any name you prefer)
- [ ] Expiration: Set to your preference (or `No expiration`)

---

## 🔍 Finding Existing Token Permissions:

If you want to **check your current token's permissions**:

1. Go to: https://github.com/settings/tokens
2. Click on **"Tokens (classic)"**
3. Find your token in the list
4. **Click on the token name**
5. Scroll to see **"Scopes"** section - it will show what permissions it has

**Note**: If `repo` is NOT listed, you need to create a NEW token with `repo` checked.

---

## ⚠️ Important Notes:

- **You CANNOT edit token scopes** - must create a new token
- **Token expires** - check expiration date
- **Old token won't work** if it doesn't have `repo` scope
- **Generate new token** if current one doesn't have `repo`

---

## 🚀 After Checking/Setting "repo" Scope:

1. **Generate new token** with `repo` checked
2. **Copy the token** immediately
3. **Push code** using the new token
4. **Token will work** for pushing to repository!

---

## 📝 Summary:

**Where**: Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token

**What to check**: ✅ `repo` - Full control of private repositories

**Direct link**: https://github.com/settings/tokens

**Once `repo` is checked, your token will work for pushing code!** ✅