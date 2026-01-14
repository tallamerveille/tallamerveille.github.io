# 🚀 Installation Steps

## 1. Create a new folder for your project

## 2. Copy all the files I created earlier into this structure:

```markdown
project-folder/
├── components/portfolio/
│   ├── content.js
│   ├── ThemeContext.jsx
│   ├── Navigation.jsx
│   ├── HeroSection.jsx
│   ├── ResearchSection.jsx
│   ├── PublicationsSection.jsx
│   ├── ExperienceSection.jsx
│   ├── TalksSection.jsx
│   ├── TeachingSection.jsx
│   ├── SkillsSection.jsx
│   ├── AwardsSection.jsx
│   ├── ContactSection.jsx
│   └── Footer.jsx
├── pages/
│   └── Portfolio.jsx
├── src/
│   └── main.jsx
├── globals.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 3. Install dependencies:

npm install
## 4. Run the development server:

npm run dev
## 5. Open: http://localhost:3000

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
