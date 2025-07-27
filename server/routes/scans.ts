/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Router } from "express";
import Database from "better-sqlite3";

const router = Router();
const db = new Database("./db/data.db");

// GET all scans
router.get("/", (req, res) => {
  const rows = db.prepare("SELECT * FROM scans").all();
  res.json(rows);
});

// GET scan by ID
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const row = db.prepare("SELECT * FROM scans WHERE id = ?").get(id);
  row ? res.json(row) : res.status(404).json({ error: "Not found" });
});

// POST create scan
router.post("/", (req, res) => {
  const {
    type,
    status,
    timestamp,
    source,
    lat,
    lng,
    city,
    display_name,
    country,
  } = req.body;

  const stmt = db.prepare(`
    INSERT INTO scans (type, status, timestamp, source, lat, lng, city, display_name, country)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const info = stmt.run(
    type,
    status,
    timestamp,
    source,
    lat,
    lng,
    city,
    display_name,
    country
  );

  res.status(201).json({ id: info.lastInsertRowid });
});

// DELETE scan
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const result = db.prepare("DELETE FROM scans WHERE id = ?").run(id);
  result.changes > 0
    ? res.json({ deleted: true })
    : res.status(404).json({ error: "Not found" });
});

export default router;
