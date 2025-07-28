// import Database from "better-sqlite3";
// const db = new Database("./db/data.db");

// db.exec(`DROP TABLE IF EXISTS scans;`);

// db.exec(`
//   CREATE TABLE scans (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     type TEXT,
//     status TEXT,
//     timestamp TEXT,
//     source TEXT,
//     lat REAL,
//     lng REAL,
//     city TEXT,
//     display_name TEXT,
//     country TEXT
//   );
// `);

import Database from "better-sqlite3";
const db = new Database("./db/data.db");

// Drop the old table if it exists
db.exec(`DROP TABLE IF EXISTS scans;`);

// Create a new table based on the ScanEvent interface
db.exec(`
  CREATE TABLE scans (
    id TEXT PRIMARY KEY,    
    timestamp TEXT NOT NULL,
    type TEXT CHECK(type IN ('metal', 'pipe', 'tunnel', 'mine')) NOT NULL,
    status TEXT CHECK (status IN ('warning', 'active', 'inactive')) NOT NULL,
    source TEXT CHECK (source IN ('drone', 'robot', 'manual')) NOT NULL,
    lat REAL NOT NULL,
    lng REAL NOT NULL,
    depth REAL NOT NULL,
    signal_strength REAL NOT NULL,  
    country TEXT NOT NULL,
    city TEXT NOT NULL,
    display_name TEXT NOT NULL
  );
`);

console.log("Done init Db");
