import maplibregl from "maplibre-gl";
import { useEffect, useRef } from "react";
import type { IScanMap } from "../../interfaces/IScan";
import { getEmojiByType } from "../../utils/helper";
import { getPopupHtml } from "../../utils/getPopupHtml";

const ScanEvent = ({ events }: IScanMap) => {
  return <div>{events.map((i) => i.city)}</div>;
};

export default ScanEvent;
