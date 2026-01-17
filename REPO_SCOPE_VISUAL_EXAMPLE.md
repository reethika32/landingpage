# 📸 Visual Example: What "repo" Scope Looks Like

Here's exactly what you'll see when creating a Classic Token with "repo" scope:

---

## 🎨 Visual Example - Classic Token Page:

### **When You're on "Generate new token (classic)" Page:**

```
┌─────────────────────────────────────────────────────────────┐
│  Generate new token (classic)                               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Note                                                       │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Nirvista Project                                    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  Expiration                               [90 days ▼]      │
│                                                              │
│  ──────────────────────────────────────────────────────────│
│                                                              │
│  Select scopes                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │  ☑️ repo                                           │   │
│  │     Full control of private repositories           │   │
│  │                                                     │   │
│  │  ☐ workflow                                        │   │
│  │     Update GitHub Action workflows                 │   │
│  │                                                     │   │
│  │  ☐ write:packages                                  │   │
│  │     Upload packages to GitHub Package Registry     │   │
│  │                                                     │   │
│  │  ☐ read:packages                                   │   │
│  │     Download packages from GitHub Package Registry │   │
│  │                                                     │   │
│  │  ☐ delete:packages                                 │   │
│  │     Delete packages from GitHub Package Registry   │   │
│  │                                                     │   │
│  │  ☐ admin:org                                       │   │
│  │     Full control of orgs and teams                 │   │
│  │                                                     │   │
│  │  ☐ write:org                                       │   │
│  │     Read and write org and team membership         │   │
│  │                                                     │   │
│  │  ... (many more options)                           │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              [Generate token]                        │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## ✅ What You're Looking For:

### **The "repo" Scope Entry:**

```
☑️ repo
   Full control of private repositories
```

**Key Features:**
- **Checkbox**: ☑️ (square box that you can check/uncheck)
- **Name**: `repo` (in bold or darker text)
- **Description**: "Full control of private repositories" (in lighter gray text below)

---

## 📋 Exact Text You'll See:

### **In the "Select scopes" section:**

```
Select scopes

☑️ repo
   Full control of private repositories
```

### **Location:**
- **Section Title**: "Select scopes" (heading above the checkboxes)
- **Checkbox**: ☑️ (empty ☐ or checked ☑️)
- **Scope Name**: `repo` (short name)
- **Description**: "Full control of private repositories" (gray text, indented)

---

## 🎯 How It Looks on GitHub:

### **Visual Breakdown:**

```
┌────────────────────────────────────────────┐
│ Select scopes                              │ ← Section title
├────────────────────────────────────────────┤
│                                            │
│  ☑️ repo                                  │ ← Checkbox + name
│     Full control of private repositories   │ ← Description
│                                            │
│  ☐ workflow                                │
│     Update GitHub Action workflows         │
│                                            │
│  ☐ write:packages                          │
│     Upload packages...                     │
│                                            │
└────────────────────────────────────────────┘
```

---

## ✅ What "repo" Scope Means:

When you check the "repo" box:
- ✅ **Read access** to repositories
- ✅ **Write access** to repositories (can push code)
- ✅ **Full control** of private repositories
- ✅ Can create, delete, and manage repositories

---

## 📍 Where to Find It:

### **Step 1: Navigate to Classic Tokens**
- Settings → Developer settings → Personal access tokens → **Tokens (classic)**

### **Step 2: Generate New Token**
- Click "Generate new token" → "Generate new token (classic)"

### **Step 3: Scroll Down**
- Scroll past "Note" field
- Scroll past "Expiration" dropdown
- **Look for "Select scopes" section**

### **Step 4: Find "repo"**
- It's usually **the FIRST checkbox** in the list
- Labeled: `repo - Full control of private repositories`

---

## 🔍 Key Indicators:

You'll know you found it when you see:
- ✅ Checkbox (☐ or ☑️)
- ✅ Text: **`repo`**
- ✅ Description: **"Full control of private repositories"**
- ✅ It's in the "Select scopes" section
- ✅ It's on the "Generate new token (classic)" page

---

## ⚠️ What It Does NOT Look Like:

### **Fine-grained Tokens (Wrong Page):**
```
Repository access:
☐ Only select repositories
☐ All repositories

Repository permissions:
☐ Contents (read/write)
☐ Metadata (read/write)
☐ Issues (read/write)
```
❌ **This is NOT the "repo" scope!** This is Fine-grained tokens.

---

## ✅ Summary:

**"repo" scope looks like:**
```
☑️ repo
   Full control of private repositories
```

**Location:** 
- "Generate new token (classic)" page
- "Select scopes" section
- Usually the first checkbox

**Action:** Check the box ☑️ next to "repo"

---

**That's exactly what you'll see when you're on the Classic Token page!** 🎯