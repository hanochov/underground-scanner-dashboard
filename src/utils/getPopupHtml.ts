import type { IScanEvent } from "../interfaces/IScan";
import { getEmojiByType } from "./helper";

export function getPopupHtml(event: IScanEvent): string {
  const emoji = getEmojiByType(event.type);
  const date = new Date(event.timestamp).toLocaleString("en-US", {
    dateStyle: "short",
    timeStyle: "short",
  });

  return `
    <div style="
      font-family: sans-serif;
      padding: 10px;
      min-width: 180px;
      border-radius: 8px;
      background: white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    ">
      <div style="font-size: 16px; font-weight: bold; margin-bottom: 4px;">
         ${event.city}
      </div>
      <div style="font-size: 14px; color: #555; margin-bottom: 4px;">
        ${event.display_name}
      </div>
      <div style="font-size: 13px; color: #333;">
        🕒 ${date}
      </div>
        <div style="font-size: 13px; color: #333;">
        ${emoji} סוג: ${event.type}
      </div>
      <div style="font-size: 13px; color: #333;">
        ⛏️ עומק: ${event.depth}
      </div>
      <div style="font-size: 13px; color: #333;">
        🛰️ מקור: ${event.source}
      </div>
    </div>
  `;
}
