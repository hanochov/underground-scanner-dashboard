import * as betterSqlite3 from "better-sqlite3";
import { randomUUID } from "crypto";
import { getCityFromCoords } from "../utils/getCityFromCoords";
import { getRandomLat, getRandomLng, randomFrom } from "../utils/random";

const db = new betterSqlite3.default("./db/data.db");

const insert = db.prepare(`
  INSERT INTO scans (
    id,
    timestamp,
    type,
    status,
    source,
    lat,
    lng,
    depth,
    signal_strength,
    country,
    city,
    display_name
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

function getRandomTimestampWithinLastYear(): string {
  const msInYear = 365 * 24 * 60 * 60 * 1000;
  const randomTime = Date.now() - Math.random() * msInYear;
  return new Date(randomTime).toISOString();
}

async function insertRandomScan() {
  const types = ["metal", "pipe", "cavity", "unknown"];
  const statuses = ["active", "inactive", "warning"];
  const sources = ["drone", "robot", "manual"];

  const lat = getRandomLat();
  const lng = getRandomLng();

  const { city, displayName, country } = await getCityFromCoords(lat, lng);

  if (
    [city, displayName, country].includes("Unknown") ||
    country === "Palestinian Territory"
  ) {
    console.warn(
      `Skipping invalid location: ${city}, ${displayName}, ${country}`
    );
    return false;
  }

  const id = randomUUID();
  const timestamp = getRandomTimestampWithinLastYear();
  const type = randomFrom(types);
  const status = randomFrom(statuses);
  const source = randomFrom(sources);
  const depth = Math.floor(Math.random() * 100);
  const signalStrength = parseFloat((Math.random() * 100).toFixed(2));

  insert.run(
    id,
    timestamp,
    type,
    status,
    source,
    lat,
    lng,
    depth,
    signalStrength,
    country,
    city,
    displayName
  );

  console.log(`Inserted scan in ${city} (${lat}, ${lng})`);
  return true;
}

async function seed(count = 10) {
  let inserted = 0;
  while (inserted < count) {
    const success = await insertRandomScan();
    if (success) inserted++;
  }
  console.log(`Seeded ${inserted} scans successfully.`);
}

seed();
