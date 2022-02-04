import Weather from "./components/Weather";
import HeaderAlert from "./components/HeaderAlert";

import "./App.css";
import useWeather from "./contexts/Weather";

function App() {
  const { getWeatherData, allowedGeoLocation } = useWeather();

  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <p>
          <button type="button" onClick={getWeatherData}>
            Pegar
          </button>
        </p>
      </header>
      {!allowedGeoLocation ? <HeaderAlert /> : null}
    </div>
  );
}

export default App;
