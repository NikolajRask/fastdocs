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

export function cuid(): string {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base-36
  const randomSegment = Math.random().toString(36).substring(2, 10); // Random base-36 segment
  const counter = Math.floor(Math.random() * 1000).toString(36); // Random base-36 counter
  const cuid = `${timestamp}-${randomSegment}-${counter}`;
  return cuid;
}