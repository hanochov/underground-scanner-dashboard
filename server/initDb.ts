import Database from "better-sqlite3";
const db = new Database("./db/data.db");

db.exec(`DROP TABLE IF EXISTS scans;`);

db.exec(`
  CREATE TABLE scans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT,
    status TEXT,
    timestamp TEXT,
    source TEXT,
    lat REAL,
    lng REAL,
    city TEXT,
    display_name TEXT,
    country TEXT
  );
`);
