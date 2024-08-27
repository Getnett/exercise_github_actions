import { createServer } from "node:http";

const server = createServer((_req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Github actions!\n");
});

server.listen(5002, () => {
  console.log("Listening on localhost:5002");
});
