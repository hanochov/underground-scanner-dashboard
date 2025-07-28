import maplibregl from "maplibre-gl";
import { useEffect, useRef } from "react";
import type { IScanMap } from "../../interfaces/IScan";
import { getEmojiByType } from "../../utils/helper";
import { getPopupHtml } from "../../utils/getPopupHtml";

const ScanMap = ({ events }: IScanMap) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    maplibregl.setRTLTextPlugin(
      "https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.3.0/dist/mapbox-gl-rtl-text.js",
      true
    );

    const map = new maplibregl.Map({
      container: mapContainerRef.current!,
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
      center: [35.2137, 31.7683],
      zoom: 7,
      bearing: 27,
      pitch: 45,
    });

    mapRef.current = map;

    return () => map.remove();
  }, []);

  function addMarkersToMap(map: maplibregl.Map, events: IScanMap["events"]) {
    events.forEach((event) => {
      const el = document.createElement("div");
      el.style.fontSize = "24px";
      el.style.display = "flex";
      el.style.alignItems = "center";
      el.style.justifyContent = "center";
      el.style.width = "42px";
      el.style.height = "42px";
      el.style.borderRadius = "50%";
      el.style.backgroundColor = "white";
      el.style.border = "1px solid #666";
      el.style.boxShadow = "0 0 5px rgba(0,0,0,0.3)";
      el.textContent = getEmojiByType(event.type);

      new maplibregl.Marker({ element: el })
        .setLngLat([event.lng, event.lat])
        .setPopup(
          new maplibregl.Popup({ offset: 25 }).setHTML(getPopupHtml(event))
        )
        .addTo(map);

      map.flyTo({
        center: [event.lng, event.lat],
        speed: 0.7,
        zoom: 14,
        essential: true,
      });
    });
  }

  useEffect(() => {
    if (!mapRef.current) return;
    addMarkersToMap(mapRef.current, events);
  }, [events]);

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "800px" }} />
  );
};

export default ScanMap;
