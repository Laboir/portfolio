# 🚀 GitHub Pe Upload Karne Ka Tarika

## Step 1: Code Download Karein

Portfolio website pe jaayein aur **"Download Code"** button (bottom-right corner) pe click karein.

## Step 2: ZIP File Extract Karein

Downloaded `pankaj-portfolio.zip` file ko extract karein.

## Step 3: GitHub Pe Push Karein

### Windows Users:
1. Extracted folder me jaayein
2. **`push-to-github.bat`** file pe double-click karein
3. GitHub login popup aayega - apna username/password daalein
4. Bas! Code upload ho jayega! ✅

### Mac/Linux Users:
Terminal me jaake ye commands run karein:

```bash
cd extracted-folder-path
chmod +x push-to-github.sh
./push-to-github.sh
```

### Manual Method (Agar Script Kaam Na Kare):

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Laboir/Portflio.git
git push -u origin main --force
```

## Step 4: GitHub Pe Check Karein

https://github.com/Laboir/Portflio pe jaayein aur refresh karein. Aapka poora code dikh jayega!

---

## 🌐 Website Live Karne Ke Liye

### Vercel (Recommended):
1. https://vercel.com pe jaayein
2. "Import Project" pe click karein
3. GitHub se **Portflio** repo select karein
4. "Deploy" dabayein
5. 2 minute me live ho jayega! 🎉

---

## ❓ Koi Problem?

Agar koi error aaye to:
1. Git installed hai? Check: `git --version`
2. GitHub account me login hai?
3. Repository URL sahi hai? `https://github.com/Laboir/Portflio.git`
