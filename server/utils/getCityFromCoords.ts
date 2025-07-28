import fetch from "node-fetch";
import { LocationInfo, NominatimResponse } from "../types";

export async function getCityFromCoords(
  lat: number,
  lng: number
): Promise<LocationInfo> {
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
    const response = await fetch(url, {
      headers: {
        "User-Agent": "scanner-demo",
      },
    });

    const data = (await response.json()) as NominatimResponse;

    return {
      city:
        data.address?.city ||
        data.address?.town ||
        data.address?.village ||
        data.address?.state ||
        "Unknown",
      displayName: data?.display_name || "Unknown location",
      country: data?.address?.country || "Unknown",
    };
  } catch (err) {
    console.error("Failed to fetch location info:", err);
    return {
      city: "Unknown city",
      displayName: "Unknown displayName",
      country: "Unknown country",
    };
  }
}
