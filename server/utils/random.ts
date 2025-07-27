export const randomFrom = <T>(arr: T[]) =>
  arr[Math.floor(Math.random() * arr.length)];

export function getRandomLat(): number {
  return +(31.0 + Math.random() * (33.0 - 31.0)).toFixed(5);
}

export function getRandomLng(): number {
  return +(34.7 + Math.random() * (35.3 - 34.7)).toFixed(5);
}

export const randomTimestamp = new Date(
  Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000
).toISOString();
