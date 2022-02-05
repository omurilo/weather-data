import { IconType } from "react-icons/lib";
import { RiFoggyLine } from "react-icons/ri";
import {
  FiCloud,
  FiCloudDrizzle,
  FiCloudLightning,
  FiCloudOff,
  FiCloudRain,
  FiCloudSnow,
  FiWind,
} from "react-icons/fi";

export function getConditionColor(condition: string = "") {
  const conditions: Record<string, string> = {
    SNOW: "#00b9cd",
    CLOUDS: "#2872b6",
    MIST: "#ac3dc1",
    FOG: "#00ab29",
    RAIN: "#ef7b00",
    CLEAR: "#e4ff53",
    DEFAULT: "#00bede",
  };

  return conditions[condition?.toUpperCase()] ?? conditions["DEFAULT"];
}

export function getConditionIcon(condition: string = "") {
  const conditions: Record<string, IconType> = {
    SNOW: FiCloudSnow,
    WIND: FiWind,
    FOGGY: RiFoggyLine,
    DRIZZLE: FiCloudDrizzle,
    THUNDERSTORM: FiCloudLightning,
    RAIN: FiCloudRain,
    CLEAR: FiCloudOff,
    DEFAULT: FiCloud,
  };
  return conditions[condition?.toUpperCase()] ?? conditions["DEFAULT"];
}

export function getTemp(temp: number) {
  return `${parseInt(`${temp}`, 10)}°C`;
}

export function getWindSpeed(speed: number) {
  return `${parseInt(`${(speed * 3600) / 1000}`, 10)} km/h`;
}
