import { createServer } from "http";
import { app } from "./app";

const API_PORT = 4521;

const server = createServer(app);

server.listen(API_PORT, () =>
  console.log(`Server started at port ${API_PORT}`)
);
