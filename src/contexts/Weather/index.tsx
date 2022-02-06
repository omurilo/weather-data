import * as React from "react";

import useLocation from "@hooks/useLocation";
import { APP_CONFIG } from "@config/env";

interface WeatherResponse {
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  name: string;
  cod: number;
}

type WeatherContextType = {
  data?: WeatherResponse;
  error?: Error;
  isLoading: boolean;
  errorLocation?: string;
  getWeatherData(): void;
};

const WeatherContext = React.createContext<WeatherContextType>(
  {} as WeatherContextType
);

export const WeatherContextProvider: React.FunctionComponent = ({
  children,
}) => {
  const [error, setError] = React.useState<Error>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<WeatherResponse>();

  const {
    currentLocation,
    error: errorLocation,
    getCurrentLocation,
  } = useLocation();

  const { API_KEY } = APP_CONFIG;

  React.useEffect(() => {
    if (currentLocation.coords) {
      fetchWeatherData();
    }
  }, [currentLocation.timestamp]);

  async function fetchWeatherData() {
    setIsLoading(true);
    const { coords } = currentLocation;
    try {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&lang=pt_br&units=metric`
      );

      const data: WeatherResponse = await result.json();
      setData(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }

  function getWeatherData() {
    getCurrentLocation();
  }

  return (
    <WeatherContext.Provider
      value={{ data, isLoading, error, errorLocation, getWeatherData }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default function useWeather() {
  return React.useContext(WeatherContext);
}
