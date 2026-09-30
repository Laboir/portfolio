# 🚀 Pankaj Portfolio

A modern, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with gradient accents
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🚀 **Fast Performance** - Built with Vite for lightning-fast loading
- 🎯 **Project Case Studies** - Detailed project pages with live links, sheets, and reports
- 📄 **Resume Section** - Education, highlights, and CV download
- 📊 **Skills Visualization** - Animated skill bars and tech tags
- 💼 **Work Experience** - Timeline view of professional experience
- 📬 **Contact Form** - Direct email integration
- 🌙 **Dark Mode Ready** - Prepared for dark mode support
- 📥 **Download Code** - Built-in feature to download source code as ZIP

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Icons**: Lucide React
- **ZIP Generation**: JSZip + FileSaver

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Laboir/Portflio.git

# Navigate to project directory
cd Portflio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

## 🏗️ Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── About.tsx           # About me section
│   │   ├── Contact.tsx         # Contact form
│   │   ├── DownloadButton.tsx  # Download code feature
│   │   ├── Experience.tsx      # Work experience timeline
│   │   ├── Footer.tsx          # Footer component
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── ProjectDetail.tsx   # Individual project page
│   │   ├── Projects.tsx        # Projects grid
│   │   ├── Resume.tsx          # Resume section
│   │   └── Skills.tsx          # Skills visualization
│   ├── data/
│   │   └── projects.ts         # Project data
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
└── vite.config.js              # Vite config
```

## 🎯 Key Sections

### Projects
- Click on any project card to view detailed case study
- Each project includes:
  - Live website link
  - Role and responsibilities
  - What I did (detailed breakdown)
  - Results and achievements
  - Related documents and sheets

### Resume
- Education details
- Key highlights and achievements
- CV download link

### Skills
- Digital Marketing skills
- Tools & Platforms
- Technical skills

## 🌐 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/Portflio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📧 Contact

- **Email**: pankajsengar071@gmail.com
- **Phone**: +91-7557435690
- **LinkedIn**: [linkedin.com/in/pankajsengar071](https://linkedin.com/in/pankajsengar071)

## 📝 License

MIT © 2026 Pankaj

---

Built with ❤️ by Pankaj
