import React from "react";
import { AiOutlineFire } from "react-icons/ai";
import {
  HiOutlineArrowNarrowUp,
  HiOutlineArrowNarrowDown,
} from "react-icons/hi";

import CloudsLoader from "@components/Loader";

import * as Styled from "@components/Weather/styles";

import useWeather from "@contexts/Weather";
import { getConditionIcon, getTemp, getWindSpeed } from "@utils/index";

export default function Weather() {
  const { isLoading, error, data } = useWeather();

  function mountConditionIcon(condition: string) {
    const Icon = getConditionIcon(condition);

    return <Icon />;
  }

  if (isLoading) return <CloudsLoader />;

  if (error) return <span>Error: {JSON.stringify(error.message)}</span>;

  return (
    <Styled.Container>
      {data ? (
        <Styled.Card>
          <Styled.Title>
            Tempo agora em <strong>{data.name}</strong>
          </Styled.Title>
          <div className="icon">
            <img
              id="wicon"
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt="Weather icon"
            />
            <span>{getTemp(data.main.temp)}</span>
          </div>
          <Styled.Row>
            <Styled.SubTitle>
              {mountConditionIcon(data.weather[0].main)}
              {data.weather[0].description}
            </Styled.SubTitle>
            <Styled.SubTitle>
              <AiOutlineFire /> Sensação {getTemp(data.main.feels_like)}
            </Styled.SubTitle>
          </Styled.Row>
          <Styled.List>
            <Styled.Row>
              <span>Temperatura</span>
              <div>
                <span>
                  <HiOutlineArrowNarrowDown color="skyblue" />{" "}
                  {getTemp(data.main.temp_min)}
                </span>
                <span>
                  <HiOutlineArrowNarrowUp color="red" />{" "}
                  {getTemp(data.main.temp_max)}
                </span>
              </div>
            </Styled.Row>
            <Styled.Row>
              <span>Vento</span>
              <span>{getWindSpeed(data.wind.speed)}</span>
            </Styled.Row>
            <Styled.Row>
              <span>Umidade</span>
              <span>{data.main.humidity}%</span>
            </Styled.Row>
          </Styled.List>
        </Styled.Card>
      ) : null}
    </Styled.Container>
  );
}
