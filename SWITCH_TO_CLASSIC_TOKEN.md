# 🔄 Switch to Classic Token - Step by Step

## ⚠️ Current Problem:
- You're on **"Fine-grained tokens"** (left sidebar - highlighted in blue)
- Fine-grained tokens don't have "repo" scope
- Your token has **NO permissions** set

## ✅ Solution:
Switch to **"Tokens (classic)"** to get "repo" scope!

---

## 🎯 Step-by-Step Fix:

### **Step 1: Click "Tokens (classic)"**

Look at the **left sidebar** - you should see:

```
Personal access tokens
├── Fine-grained tokens  ← You are HERE (blue/highlighted)
└── Tokens (classic)     ← CLICK THIS!
```

**Click on "Tokens (classic)"** in the left sidebar!

---

### **Step 2: Create New Classic Token**

1. After clicking "Tokens (classic)", you'll see a list of tokens (or empty)
2. Click **"Generate new token"** button (usually top right)
3. Click **"Generate new token (classic)"** (must say "classic")

---

### **Step 3: Fill in Token Details**

1. **Note**: Enter `Nirvista Project Classic` (or any name)
2. **Expiration**: Choose `90 days` or `No expiration`
3. **Scroll down** to "Select scopes" section

---

### **Step 4: Find and Check "repo" Scope**

Scroll down until you see:

```
Select scopes

✅ repo                              ← CHECK THIS ONE!
   Full control of private repositories

☐ workflow
☐ write:packages
... (more options)
```

**CHECK the box next to "repo"** ✅

---

### **Step 5: Generate Token**

1. Scroll to bottom
2. Click **"Generate token"** button (green button)
3. **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)

---

## 📍 Visual Guide - What to Do:

### **In Left Sidebar:**
```
Personal access tokens
├── Fine-grained tokens  ← Currently selected (blue)
└── Tokens (classic)     ← CLICK THIS INSTEAD!
```

### **After Clicking "Tokens (classic)":**
- You'll see classic tokens page
- Click **"Generate new token"**
- Click **"Generate new token (classic)"**
- Scroll to **"Select scopes"**
- Check **✅ repo**

---

## ⚠️ Important Notes:

### **Why Classic Token?**
- **Classic tokens** have simple scopes like "repo"
- **Fine-grained tokens** have complex permissions (no "repo" scope)
- For pushing code, **Classic token with "repo" scope is easiest!**

### **Your Current Token:**
- Your "Nirvista Project" token is a **Fine-grained token**
- It has **NO permissions** set
- It won't work for pushing code
- You need to create a **NEW Classic token** instead

---

## 🚀 Quick Action:

1. **Left sidebar** → Click **"Tokens (classic)"** ← DO THIS NOW!
2. **Generate new token (classic)**
3. **Check "repo" scope** ✅
4. **Copy the new token**
5. **Use new token to push code**

---

## ✅ After Creating Classic Token:

Once you have a classic token with "repo" scope:
- It will work for pushing code!
- Use it when Git asks for password
- Replace the old fine-grained token

---

**Click "Tokens (classic)" in the left sidebar to get started!** 🎯