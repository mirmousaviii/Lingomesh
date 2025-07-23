# 🎯 German Dashboard (Meine Orientierung)

A modern, beautiful React dashboard for learning German time, date, and weather with an intuitive interface and comprehensive design system.

![German Dashboard Preview](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.5-38B2AC)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF)

## ✨ Features

### 🕐 **Time Learning**

- Real-time digital clock display
- German phonetic time pronunciation
- 12h/24h format toggle
- Interactive time format switching

### 📅 **Date Learning**

- Full German date format display
- English translation support
- German phonetic date pronunciation
- Complete ordinal number system

### 🌤️ **Weather Learning**

- Real-time weather data from OpenWeatherMap API
- German city selection
- Weather condition descriptions
- Temperature, humidity, and wind speed
- German phonetic weather descriptions

### 🎨 **Modern UI/UX**

- Glass morphism design with backdrop blur
- Dark/Light/System theme support
- Smooth animations and transitions
- Responsive design for all devices
- Custom German-themed color palette
- Beautiful gradients and shadows

### 🌍 **Language Support**

- German primary interface
- Optional English translations
- Phonetic pronunciation guides
- Toggle translation feature

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/german-dashboard.git
   cd german-dashboard
   ```

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

## 📦 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # TypeScript type checking
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── App/          # Main app component
│   │   ├── Header/       # Application header
│   │   └── Footer/       # Application footer
│   ├── ui/
│   │   └── Widget/       # Reusable widget component
│   └── widgets/
│       ├── TimeWidget/   # Time display and learning
│       ├── DateWidget/   # Date display and learning
│       ├── WeatherWidget/ # Weather data and learning
│       └── SettingsWidget/ # App settings and preferences
├── constants/
│   └── cities.ts         # German cities list
├── hooks/
│   ├── useTheme.ts       # Theme management
│   └── useTranslations.ts # Translation management
├── services/
│   └── weatherService.ts # Weather API integration
├── types/
│   └── weather.ts        # TypeScript type definitions
└── utils/                # Utility functions
```

## 🎨 Design System

### Color Palette

- **Primary**: Blue shades for main actions and branding
- **German**: Warm orange/amber for German text accents
- **Neutral**: Gray scale for text and backgrounds
- **Success/Warning/Error**: Semantic color system

### Typography

- **Primary Font**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono for time display
- **Responsive**: Adaptive text sizing

### Components

- **Cards**: Glass morphism with backdrop blur
- **Buttons**: Multiple variants with hover effects
- **Forms**: Clean input fields with focus states
- **Animations**: Smooth transitions and micro-interactions

## 🔧 Configuration

### Tailwind CSS

Custom configuration with:

- Extended color palette
- Custom animations
- Responsive utilities
- Dark mode support

### Vite

- Fast development server
- Optimized production builds
- TypeScript support
- Hot module replacement

## 🌐 Deployment

### GitHub Pages (Automatic)

1. **Set up GitHub Secrets:**

   - Go to your repository Settings > Secrets and variables > Actions
   - Add `VITE_WEATHER_API_KEY` with your OpenWeatherMap API key

2. **Enable GitHub Pages:**

   - Go to Settings > Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch and `/ (root)` folder

3. **Push to main branch:**
   The GitHub Actions workflow will automatically build and deploy your app.

### Manual Deployment

```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 🛠️ Technologies Used

- **Frontend Framework**: React 18.2.0
- **Language**: TypeScript 5.2.2
- **Build Tool**: Vite 5.0.0
- **Styling**: Tailwind CSS 3.3.5
- **HTTP Client**: Axios 1.6.0
- **Weather API**: OpenWeatherMap
- **Fonts**: Inter, JetBrains Mono (Google Fonts)

## 🎯 Learning Features

### German Time Pronunciation

- "Es ist drei Uhr" (It is three o'clock)
- "Es ist zehn nach drei" (It is ten past three)
- "Es ist zwanzig vor vier" (It is twenty to four)

### German Date Pronunciation

- "Heute ist Montag, der erste Januar zweitausendvierundzwanzig"
- Complete ordinal number system
- Full month and day names

### German Weather Descriptions

- "Es ist bewölkt bei zwanzig Grad Celsius"
- Temperature in German numbers
- Weather condition descriptions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for weather data
- [Inter Font](https://rsms.me/inter/) for beautiful typography
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Vite](https://vitejs.dev/) for fast build tooling

---

**Developed with ❤️ by [mirmousavi.com](https://mirmousavi.com)**
