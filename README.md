# German Time & Weather Display App

A React web application that displays the current time in German words and shows weather information for German cities.

## Features

- Real-time clock display (without seconds)
- Time shown in German words (e.g., "drei Uhr" for 3:00)
- Weather information for German cities
- German weather descriptions (e.g., "Es ist bewölkt bei 15°C")
- City selector with 30 popular German cities
- Beautiful modern UI with glassmorphism design
- Responsive design for mobile and desktop
- German and English date format display

## Installation

1. Install dependencies:

```bash
npm install
```

2. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)

3. Configure the API key:

   - Open `src/config.js`
   - Replace `'YOUR_API_KEY_HERE'` with your actual OpenWeatherMap API key

4. Start the development server:

```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How it works

The app displays:

- Digital time in 24-hour format (HH:MM)
- Time in German words (e.g., "fünfzehn nach drei" for 3:15)
- Weather information with German descriptions
- Current date in both German and English formats

The German time conversion follows standard German time telling conventions:

- "X Uhr" for exact hours
- "X nach Y" for minutes past the hour (up to 30 minutes)
- "X vor Y" for minutes before the next hour (after 30 minutes)

Weather information includes:

- Temperature in Celsius
- Weather description in German
- Humidity percentage
- Wind speed in km/h

## Available Cities

The app includes 30 major German cities:
Berlin, Hamburg, München, Köln, Frankfurt, Stuttgart, Düsseldorf, Dortmund, Essen, Leipzig, Bremen, Dresden, Hannover, Nürnberg, Duisburg, Bochum, Wuppertal, Bielefeld, Bonn, Mannheim, Karlsruhe, Wiesbaden, Münster, Gelsenkirchen, Aachen, Braunschweig, Chemnitz, Kiel, Halle, Magdeburg

## Technologies Used

- React 18
- Axios for API calls
- OpenWeatherMap API
- CSS3 with modern features (backdrop-filter, glassmorphism)
- JavaScript Date API
- German localization
