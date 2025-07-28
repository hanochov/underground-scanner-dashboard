import express from "express";
import bodyParser from "body-parser";
import scansRouter from "./routes/scans";
import http from "http";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import { setupWebSocket } from "./websocket";

import * as fs from "fs";
import * as path from "path";

const app = express();
const port = 4000;
app.use(cors());
app.use(bodyParser.json());

const server = http.createServer(app);
setupWebSocket(server);

const swaggerDocument = JSON.parse(
  fs.readFileSync(path.join(__dirname, "docs", "swagger.json"), "utf-8")
);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/scans", scansRouter);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});


