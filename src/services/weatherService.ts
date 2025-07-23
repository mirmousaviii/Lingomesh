import axios from "axios";
import { WeatherData } from "../types/weather";
import { WEATHER_API_KEY } from "../components/layout/App/config";

export const weatherService = {
  async fetchWeather(city: string): Promise<WeatherData> {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},DE&appid=${WEATHER_API_KEY}&units=metric&lang=de`
    );
    return response.data;
  },
};
