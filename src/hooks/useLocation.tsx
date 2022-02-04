import { useState } from "react";

enum PermissionGeolocation {
  "denied" = 0,
  "granted" = 1,
  "prompt" = 2,
}

enum GeolocationError {
  "unknown error",
  "denied",
  "unavailable",
  "timed out",
}

type CustomGeolocationPosition = {
  coords: Partial<GeolocationCoordinates>;
  timestamp: number;
};

export default function useLocation() {
  const [allowedGeoLocation, setAllowedGeoLocation] = useState(
    Number(sessionStorage.getItem("allowedLocation")) || 1
  );
  const [currentLocation, setCurrentLocation] =
    useState<CustomGeolocationPosition>({} as CustomGeolocationPosition);
  const [error, setError] = useState<String | null>(null);

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
    setAllowedGeoLocation(1);
    sessionStorage.setItem("allowedGeolocation", "1");
  }

  function geoError(error: GeolocationPositionError) {
    if (GeolocationPositionError.PERMISSION_DENIED === error.code) {
      setAllowedGeoLocation(0);
      sessionStorage.setItem("allowedGeolocation", "0");
    }

    setCurrentLocation({} as CustomGeolocationPosition);
    setError(GeolocationError[error.code]);
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

  return { allowedGeoLocation, currentLocation, error, getCurrentLocation };
}
