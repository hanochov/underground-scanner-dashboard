import * as betterSqlite3 from "better-sqlite3";
import { randomUUID } from "crypto";
import { getCityFromCoords } from "./getCityFromCoords";
import { getRandomLat, getRandomLng, randomFrom } from "./getRandomLatLng";

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


export async function insertRandomScan() {
  const types = ["metal" , "pipe" , "tunnel" , "mine"];
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
    return null;
  }

  const id = randomUUID();
  const timestamp = getRandomTimestampWithinLastYear();
  const type = randomFrom(types);
  const status = randomFrom(statuses);
  const source = randomFrom(sources);
  const depth = Math.floor(Math.random() * 100);
  const signalStrength = parseFloat((Math.random() * 100).toFixed(2));

  const scan = {
    id,
    timestamp,
    type,
    status,
    source,
    lat,
    lng,
    depth,
    signal_strength: signalStrength,
    country,
    city,
    display_name: displayName,
  };

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

  return scan;
}
