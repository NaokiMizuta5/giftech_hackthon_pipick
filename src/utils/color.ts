export type Color = "pink" | "orange" | "green" | "blue";

export function getThemeOneColor(color: Color) {
  switch (color) {
    case "pink":
      return "#FF0CAC";
    case "orange":
      return "#FF3C02";
    case "green":
      return "#01DDDD";
    case "blue":
      return "#7102FF";
    default:
      return "#FFFFFF";
  }
}

export function getThemeLinearColor(color: Color) {
  switch (color) {
    case "pink":
      return ["#DFCDFE", "#FF0CAC"];
    case "orange":
      return ["#FFF34B", "#FF3C02"];
    case "green":
      return ["#DDFFA8", "#01DDDD"];
    case "blue":
      return ["#BEFEFF", "#7102FF"];
    default:
      return ["#FFFFFF", "#FFFFFF"];
  }
}
