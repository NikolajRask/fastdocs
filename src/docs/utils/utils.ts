export default function classNames(
    ...classNames: (string | undefined | Record<string, boolean>)[]
  ) {
    return classNames
      .map((x) => {
        if (typeof x === "string") {
          return x;
        }
        if (typeof x === "object") {
          return Object.keys(x)
            .filter((key) => x[key])
            .join(" ");
        }
        return "";
      })
      .join(" ")
      .trim();
}

export function between(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function seconds(s: number) {
  return s * 1000
}