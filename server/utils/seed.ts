import { insertRandomScan } from "./insertRandomScan";

async function seed(count = 10) {
  let inserted = 0;
  while (inserted < count) {
    const scan = await insertRandomScan();
    if (scan) {
      inserted++;
      console.log(`Inserted scan in ${scan.city} (${scan.lat}, ${scan.lng})`);
    }
  }
  console.log(`Seeded ${inserted} scans successfully.`);
}

seed();
