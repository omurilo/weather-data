import Lottie from "react-lottie";
import cloudsData from "./clouds.json";

export default function CloudsLoader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cloudsData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie options={defaultOptions} height={250} width={250} />
    </>
  );
}
