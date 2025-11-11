/**
 * Formats the reading time.
 */
export function readingTime(minutes: number | undefined) {
  if (minutes === undefined) {
    return "?? min read";
  }
  const minutesRounded = Math.round(minutes);
  if (minutesRounded < 1) {
    return "< 1 min read";
  }
  return `${minutesRounded} min read`;
}