# 🔐 Push Code to GitHub - Authentication Guide

Your code is ready to push, but GitHub requires authentication. Here are **3 ways** to push your code:

---

## ✅ Method 1: Using Personal Access Token (Recommended)

### Step 1: Create Personal Access Token

1. Go to **GitHub.com** → Click your profile picture (top right)
2. Go to **Settings** → **Developer settings** (bottom left)
3. Click **"Personal access tokens"** → **"Tokens (classic)"**
4. Click **"Generate new token"** → **"Generate new token (classic)"**
5. Give it a name: `Nirvista Project`
6. Select scopes: Check **`repo`** (this gives full repository access)
7. Click **"Generate token"**
8. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Push Using Token

When Git prompts for password, use the **token** instead:

```bash
git push -u origin main
```

**Username**: `reethika32`  
**Password**: Paste your personal access token here

---

## ✅ Method 2: Use GitHub CLI (Easier)

### Install GitHub CLI:

```bash
# Windows (using winget)
winget install --id GitHub.cli

# Or download from: https://cli.github.com/
```

### Then:

```bash
gh auth login
# Follow the prompts to authenticate

git push -u origin main
```

---

## ✅ Method 3: Use SSH (Most Secure)

### Step 1: Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
# Press Enter for default location
# Press Enter twice for no passphrase (or set one)
```

### Step 2: Add SSH Key to GitHub

1. Copy your public key:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   # Copy the output
   ```

2. Go to **GitHub.com** → **Settings** → **SSH and GPG keys**
3. Click **"New SSH key"**
4. Paste your key and save

### Step 3: Change Remote to SSH

```bash
git remote set-url origin git@github.com:reethika32/Nirvista.git
git push -u origin main
```

---

## 🚀 Quick Push (After Authentication)

Once authenticated, just run:

```bash
git push -u origin main
```

---

## 📝 Current Status

✅ Repository configured: `https://github.com/reethika32/Nirvista.git`  
✅ Branch renamed to `main`  
⏳ **Need authentication to push**

---

## 🎯 Recommended: Use Personal Access Token

1. **Create token** (see Method 1 above)
2. **Push code**:
   ```bash
   git push -u origin main
   ```
3. When prompted:
   - Username: `reethika32`
   - Password: `paste_your_token_here`

After first push, Git will remember your credentials (or use credential manager).

---

## ✅ After Successful Push

Once pushed, your code will be at:
**https://github.com/reethika32/Nirvista**

Then you can deploy to Netlify!

---

**Need help?** The easiest method is **Method 1 (Personal Access Token)**!