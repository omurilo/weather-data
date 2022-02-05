import React from "react";

import Weather from "@components/Weather";
import HeaderAlert from "@components/HeaderAlert";
import Button from "@components/Button";

import * as Styled from "./styles";

import useWeather from "@contexts/Weather";

function App() {
  const { getWeatherData, errorLocation, data } = useWeather();

  return (
    <Styled.Container $condition={data?.weather[0].main}>
      <header>
        {errorLocation ? <HeaderAlert message={errorLocation} /> : null}
      </header>
      <Weather />
      <Button handle={getWeatherData}>
        {data ? "Atualizar" : "Buscar"} previsão do tempo
      </Button>
    </Styled.Container>
  );
}

export default App;
