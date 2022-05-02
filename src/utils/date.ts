export function getDate(date: Date = new Date()): string {
  return date
    .toLocaleString("us-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour12: false,
    })
    .split("/")
    .reverse()
    .join("-");
}

export function getTime(date: Date = new Date()): string {
  return date.toLocaleString("us-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });
}

export function getDateTime(date: Date = new Date()): string {
  return getDate(date) + " " + getTime(date);
}
