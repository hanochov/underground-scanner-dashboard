import * as betterSqlite3 from "better-sqlite3";
const db = new betterSqlite3.default("./db/data.db");
import { getCityFromCoords } from "../utils/getCityFromCoords";
import { getRandomLat, getRandomLng, randomFrom } from "../utils/random";


const insert = db.prepare(
  `INSERT INTO scans (type, status, timestamp, source, lat, lng, city, display_name, country)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
);

function getRandomTimestampWithinLastYear(): string {
  const msInYear = 365 * 24 * 60 * 60 * 1000;
  const randomTime = Date.now() - Math.random() * msInYear;
  return new Date(randomTime).toISOString();
}

async function insertRandomScan() {
  const types = ["pipeline", "cable", "fiber"];
  const statuses = ["active", "inactive", "warning"];
  const sources = ["sensor-a", "sensor-b", "drone"];

  const lat = getRandomLat();
  const lng = getRandomLng();

  const { city, location, country } = await getCityFromCoords(lat, lng);

  if (
    [city, location, country].includes("Unknown") ||
    country === "Palestinian Territory"
  ) {
    console.warn(`Skipping invalid location: ${city}, ${location}, ${country}`);
    return;
  }

  const timestamp = getRandomTimestampWithinLastYear();

  insert.run(
    randomFrom(types),
    randomFrom(statuses),
    timestamp,
    randomFrom(sources),
    lat,
    lng,
    city,
    location,
    country
  );

  console.log(`Inserted scan in ${city} (${lat}, ${lng})`);
}

async function seed(count = 10) {
  let inserted = 0;
  while (inserted < count) {
    const before = inserted;
    await insertRandomScan();
    if (before + 1 === inserted + 1) inserted++;
  }

  console.log(`Seeded ${inserted} scans successfully.`);
}

seed();
