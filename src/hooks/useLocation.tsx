import { useState } from "react";

enum PermissionGeolocation {
  "denied" = 0,
  "granted" = 1,
  "prompt" = 2,
}

enum GeolocationError {
  "Permissão para acesso à localização negada",
  "Não foi possível determinar a sua posição",
  "O serviço de geolocalização demorou muito tempo para responder",
}

type CustomGeolocationPosition = {
  coords: Partial<GeolocationCoordinates>;
  timestamp: number;
};

export default function useLocation() {
  const [currentLocation, setCurrentLocation] =
    useState<CustomGeolocationPosition>({} as CustomGeolocationPosition);
  const [error, setError] = useState<string>("");

  const geoOptions = {
    enableHighAccuracy: true,
  };

  function geoSuccess(position: GeolocationPosition) {
    const newPosition = {
      coords: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
      timestamp: position.timestamp,
    };
    setCurrentLocation(newPosition);
    setError("");
  }

  function geoError(error: GeolocationPositionError) {
    setCurrentLocation({} as CustomGeolocationPosition);
    setError(GeolocationError[error.code - 1]);
  }

  async function getCurrentLocation() {
    if ("geolocation" in navigator) {
      if ("permissions" in navigator) {
        const result = await navigator.permissions.query({
          name: "geolocation",
        });

        const permission = PermissionGeolocation[result.state];
        if (!!permission) {
          navigator.geolocation.getCurrentPosition(
            geoSuccess,
            geoError,
            geoOptions
          );
        }
      } else {
        navigator.geolocation.getCurrentPosition(
          geoSuccess,
          geoError,
          geoOptions
        );
      }
    }
  }

  return { currentLocation, error, getCurrentLocation };
}
