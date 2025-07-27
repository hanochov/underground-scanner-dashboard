// import { generateRandomScanWithCity } from "../utils/generate";
import { generateRandomScanWithCity } from "../utils/generate";
// import { getCityFromCoords } from "../utils/getCityFromCoords";
// import { getRandomLat, getRandomLng } from "../utils/random";

const test = async () => {
  //   const scan = generateRandomScanWithCity();
  //   console.log(scan);

  //   const lat = getRandomLat();
  //   const lng = getRandomLng();

  //   const locationInfo = await getCityFromCoords(lat, lng);
  //   console.log("🚀 ~ test ~ locationInfo:", locationInfo);

  const scan = await generateRandomScanWithCity();
  console.log("🚀 ~ test ~ scan:", scan);
};

test();
