// Dependencies
const http = require("http");
const url = require("url");

// Options
const hostname = "localhost";
const port = 8082;

// Create server and  monitor our required endpoint
const httpServer = http.createServer((req, res) => {
  let response = {};
  let statusCode = null;
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === "/hello" && req.method.toLowerCase() === "get") {
    statusCode = 200;
    response = { text: "Hello, how are you doing today?" };
  } else {
    statusCode = 404;
    response = { error: "Sorry, page not found" };
  }

  res.setHeader("Content-Type", "application/json");
  res.writeHead(statusCode);
  res.end(JSON.stringify(response));
});

// Start server and listen for connections
httpServer.listen(port, hostname, () => {
  console.log(`The server is running at http://${hostname}:${port}`);
});
