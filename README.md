# Akash Birthday Celebration Website

A modern, responsive birthday celebration website built with React, Vite, and custom typography & styling, created with Lovable and downloaded locally.

## Project Structure

```
akash-birthday/
├── preview.html          # Standalone static HTML version (open directly in browser)
├── styles.css            # Stylesheet for standalone preview
├── images/               # High-resolution images for standalone preview
├── public/               # Static assets for Vite development & build
│   ├── favicon.ico
│   └── images/           # All 8 original project images
├── src/
│   ├── App.tsx           # Main React component
│   ├── main.tsx          # React application root
│   └── index.css         # Full typography & Tailwind stylesheet
├── package.json          # Dependencies & npm scripts
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## How to Run Locally

### Option 1: Development Server (Vite + React)
Start the local live-reload development server:
```bash
npm run dev
```
Then open `http://localhost:3000` in your browser.

### Option 2: Production Build & Preview
To build optimized static files for deployment:
```bash
npm run build
npm run preview
```

### Option 3: Direct Browser Preview (Zero Dependencies)
You can directly open `preview.html` in Firefox, Chrome, or any browser:
```bash
xdg-open preview.html
# or
firefox preview.html
```

## Original Project Details
- **Title**: Happy Birthday Akash | A Celebration of You
- **Lovable Project ID**: `c62c29ac-4022-4499-ae7e-8ee4e01ea3ba`
