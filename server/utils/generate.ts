import { ScanSource, ScanStatus, ScanType } from "../types";
import { getCityFromCoords } from "./getCityFromCoords";
import { getRandomLat, getRandomLng, randomFrom } from "./random";

export async function generateRandomScanWithCity() {
  const scanStatuses: ScanStatus[] = ["warning", "active", "inactive"];
  const scanTypes: ScanType[] = ["metal", "pipe", "cavity", "unknown"];
  const scanSources: ScanSource[] = ["drone", "robot", "manual"];

  const lat = getRandomLat();
  const lng = getRandomLng();

  const locationInfo = await getCityFromCoords(lat, lng);

  return {
    type: randomFrom(scanTypes),
    status: randomFrom(scanStatuses),
    timestamp: new Date().toISOString(),
    source: randomFrom(scanSources),
    lat,
    lng,
    ...locationInfo,
  };
}
