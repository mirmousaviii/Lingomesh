# German Dashboard

Web app for learning German easily & interactively – with grammar explanations, examples, exercises, quizzes and smart learning tools.

[![Deploy to GitHub Pages](https://github.com/mirmousaviii/german-dashboard/actions/workflows/deploy.yml/badge.svg)](https://github.com/mirmousaviii/german-dashboard/actions/workflows/deploy.yml)
![German Dashboard Preview](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.5-38B2AC)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF)

## Installation

1. **Clone the repository:**
2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory:

   ```env
   VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
   ```

   Get a free API key from [OpenWeatherMap](https://openweathermap.org/api).

4. **Start development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # TypeScript type checking
```

## Deployment

### GitHub Pages

1. **Set up secrets**: Add `VITE_WEATHER_API_KEY` in repository secrets
2. **Enable Pages**: Go to Settings > Pages > Source: GitHub Actions
3. **Push to main**: Automatic deployment with CI/CD
