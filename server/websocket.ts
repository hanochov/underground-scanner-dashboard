import { WebSocketServer } from "ws";
import type { Server } from "http";
import { insertRandomScan } from "./utils/insertRandomScan";

export const setupWebSocket = (server: Server) => {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (ws) => {
    console.log("WebSocket client connected");

    const interval = setInterval(async () => {
      const scan = await insertRandomScan();
      if (scan) {
        ws.send(JSON.stringify(scan));
      }
    }, 10000);

    ws.on("close", () => {
      clearInterval(interval);
      console.log("WebSocket client disconnected");
    });
  });
};
