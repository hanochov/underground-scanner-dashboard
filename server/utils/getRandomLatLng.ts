export const randomFrom = <T>(arr: T[]) =>
  arr[Math.floor(Math.random() * arr.length)];

// export function getRandomLat(): number {
//   return +(31.0 + Math.random() * (33.0 - 31.0)).toFixed(5);
// }

// export function getRandomLng(): number {
//   return +(34.7 + Math.random() * (35.3 - 34.7)).toFixed(5);
// }

// export function getRandomLat(): number {
//   // אזור תל אביב
//   return +(32.02 + Math.random() * (32.13 - 32.02)).toFixed(5);
// }

// export function getRandomLng(): number {
//   // אזור גוש דן
//   return +(34.75 + Math.random() * (34.85 - 34.75)).toFixed(5);
// }

export function getRandomLat(): number {
  // טווח: זיקים בדרום (31.60) עד השרון בצפון (32.25)
  return +(31.60 + Math.random() * (32.25 - 31.60)).toFixed(5);
}

export function getRandomLng(): number {
  // טווח: ים (מערב) עד ראש העין/מודיעין (מזרח)
  return +(34.70 + Math.random() * (35.00 - 34.70)).toFixed(5);
}




export const randomTimestamp = new Date(
  Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000
).toISOString();
