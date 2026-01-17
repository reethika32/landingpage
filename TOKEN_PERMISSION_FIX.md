# 🔧 Token Permission Issue - How to Fix

The token might not have the correct permissions. Here's how to fix it:

---

## ✅ Step 1: Verify Token Permissions

1. Go to: https://github.com/settings/tokens
2. Find your token (or create a new one)
3. Make sure it has **ALL these scopes checked**:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (if you use GitHub Actions)

**The `repo` scope is CRITICAL!** Without it, you can't push code.

---

## ✅ Step 2: Create New Token (If Current One Doesn't Work)

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Name: `Nirvista Project - Full Access`
4. **Check these scopes:**
   - ✅ `repo` (Full control)
   - ✅ `workflow` (optional, for Actions)
5. Set expiration: `90 days` (or `No expiration`)
6. Click **"Generate token"**
7. **COPY THE NEW TOKEN** immediately

---

## ✅ Step 3: Try Push Again

After creating a new token with `repo` scope:

```bash
git push -u origin main
```

When prompted:
- **Username**: `reethika32`
- **Password**: `paste_new_token_here`

---

## 🔄 Alternative: Use GitHub Desktop (Easier)

1. Download: https://desktop.github.com/
2. Install and sign in with your GitHub account
3. File → Add Local Repository
4. Select your `IP2` folder
5. Click **"Publish repository"**
6. It will push automatically!

---

## ⚠️ Common Issues

### "Permission denied" Error:
- **Cause**: Token doesn't have `repo` scope
- **Fix**: Create new token with `repo` scope checked

### "Invalid credentials":
- **Cause**: Token expired or revoked
- **Fix**: Generate a new token

### Token Not Working:
- **Make sure**: Token has `repo` scope (full repository access)
- **Check**: Token hasn't expired
- **Verify**: You're using token as password (not GitHub password)

---

## 📝 Quick Fix Checklist

- [ ] Token has `repo` scope checked
- [ ] Token hasn't expired
- [ ] Using token as password (not GitHub password)
- [ ] Repository exists: https://github.com/reethika32/Nirvista
- [ ] You have write access to the repository

---

**Once token has `repo` scope, push will work!** 🚀