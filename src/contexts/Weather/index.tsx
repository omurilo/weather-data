import {
  createContext,
  ReactChild,
  useContext,
  useEffect,
  useState,
} from "react";
import useLocation from "../../hooks/useLocation";

interface WeatherResponse {
  weather: [
    {
      id: Number;
      main: String;
      description: String;
      icon: String;
    }
  ];
  main: {
    temp: Number;
    feels_like: Number;
    temp_min: Number;
    temp_max: Number;
    pressure: Number;
    humidity: Number;
  };
  visibility: Number;
  wind: {
    speed: Number;
    deg: Number;
  };
  clouds: {
    all: Number;
  };
  name: String;
  cod: Number;
}

type WeatherContextType = {
  data?: WeatherResponse;
  error?: Error;
  isLoading: boolean;
  allowedGeoLocation: number;
  getWeatherData(): void;
};

const WeatherContext = createContext<WeatherContextType>(
  {} as WeatherContextType
);

export const WeatherContextProvider = ({
  children,
}: {
  children: ReactChild;
}) => {
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<WeatherResponse>();

  const { currentLocation, allowedGeoLocation, getCurrentLocation } =
    useLocation();

  const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

  useEffect(() => {
    if (currentLocation.coords) {
      fetchWeatherData();
    }
  }, [currentLocation.timestamp]);

  async function fetchWeatherData() {
    const { coords } = currentLocation;
    try {
      setIsLoading(true);
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&lang=pt_br`
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
      value={{ data, isLoading, error, allowedGeoLocation, getWeatherData }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default function useWeather() {
  return useContext(WeatherContext);
}
