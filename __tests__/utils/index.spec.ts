import { FiCloud, FiCloudRain } from "react-icons/fi";
import {
  getConditionColor,
  getConditionIcon,
  getTemp,
  getWindSpeed,
} from "@utils/index";

const condition = "Clouds";
const speed = 0.96;
const temp = 25;

describe("Utils", () => {
  it("Should be get condition color", () => {
    const conditionColor = getConditionColor(condition);

    expect(conditionColor).toStrictEqual("#2872b6");
  });

  it("Should be get default condition color when condition doesn't exist", () => {
    const conditionColor = getConditionColor("Cloud");

    expect(conditionColor).toStrictEqual("#00bede");
  });

  it("Should be get default condition color when don't send condition", () => {
    const conditionColor = getConditionColor();

    expect(conditionColor).toStrictEqual("#00bede");
  });

  it("Should be get default condition Icon", () => {
    const conditionIcon = getConditionIcon(condition);

    expect(conditionIcon).toEqual(FiCloud);
  });

  it("Should be get default condition Icon when don't send condition", () => {
    const conditionIcon = getConditionIcon();

    expect(conditionIcon).toEqual(FiCloud);
  });

  it("Should be get condition Icon", () => {
    const conditionIcon = getConditionIcon("Rain");

    expect(conditionIcon).toEqual(FiCloudRain);
  });

  it("Should be get formatted wind velocity", () => {
    const formattedSpeed = getWindSpeed(speed);

    expect(formattedSpeed).toStrictEqual("3 km/h");
  });

  it("Should be get formatted temperature", () => {
    const formattedTemp = getTemp(temp);

    expect(formattedTemp).toStrictEqual("25°C");
  });
});
