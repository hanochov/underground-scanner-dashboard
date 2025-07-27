import fetch from "node-fetch";

export async function getCityName(
  lat: number,
  lon: number
): Promise<string | null> {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

  const res = await fetch(url, {
    headers: {
      "User-Agent": "scanner@vladi.dev",
    },
  });

  if (!res.ok) {
    console.error("Nominatim request failed:", res.statusText);
    return null;
  }

  const data = await res.json();

  return (
    data.address?.city ||
    data.address?.town ||
    data.address?.village ||
    data.address?.state ||
    null
  );
}
