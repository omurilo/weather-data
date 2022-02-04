import CloudsLoader from "../Loader";

import useWeather from "../../contexts/Weather";

export default function Weather() {
  const { isLoading, error, data } = useWeather();

  if (isLoading) return <CloudsLoader />;

  if (error) return <span>Error: {JSON.stringify(error.message)}</span>;

  return (
    <div>
      {data ? (
        <>
          <pre>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        </>
      ) : null}
    </div>
  );
}
