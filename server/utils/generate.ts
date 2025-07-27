import { getCityFromCoords } from "./getCityFromCoords";
import { getRandomLat, getRandomLng, randomFrom } from "./random";


export async function generateRandomScanWithCity() {
  const types = ["pipeline", "cable", "fiber"];
  const statuses = ["active", "inactive", "warning"];
  const sources = ["sensor-a", "sensor-b", "drone"];

  const lat = getRandomLat();
  const lng = getRandomLng();

  const locationInfo = await getCityFromCoords(lat, lng);

  return {
    type: randomFrom(types),
    status: randomFrom(statuses),
    timestamp: new Date().toISOString(),
    source: randomFrom(sources),
    lat,
    lng,
    ...locationInfo,
  };
}
