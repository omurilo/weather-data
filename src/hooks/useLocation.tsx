import { useEffect, useState } from "react";

enum PermissionGeolocation {
  "denied" = 0,
  "granted" = 1,
  "prompt" = 2,
}

enum GeolocationError {
  "unknown error",
  "permission denied",
  "position unavailable",
  "timed out",
}

export default function useWeather() {
  const [allowedGeoLocation, setAllowedGeoLocation] = useState(false);
  const [currentLocation, setCurrentLocation] =
    useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<String | null>(null);

  const geoOptions = {
    enableHighAccuracy: true,
  };

  function geoSuccess(position: GeolocationPosition) {
    setAllowedGeoLocation(true);
    setCurrentLocation(position);
  }

  function geoError(error: GeolocationPositionError) {
    if (GeolocationError[error.code] === "permission denied") {
      setAllowedGeoLocation(false);
    }

    setCurrentLocation(null);
    setError(GeolocationError[error.code]);
  }

  useEffect(() => {
    if (!allowedGeoLocation || !currentLocation) {
      if (navigator.permissions) {
        navigator.permissions.query({ name: "geolocation" }).then((result) => {
          const permission = PermissionGeolocation[result.state];
          if (permission === 2 && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              geoSuccess,
              geoError,
              geoOptions
            );
          } else {
            setAllowedGeoLocation(!!PermissionGeolocation[result.state]);
          }
        });
      } else if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          geoSuccess,
          geoError,
          geoOptions
        );
      }
    }
  }, [allowedGeoLocation, currentLocation]);

  return { allowedGeoLocation, currentLocation, error };
}
