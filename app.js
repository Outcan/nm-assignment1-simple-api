// Dependencies
const http = require("http");

const hostname = "localhost";

const port = 8082;

const url = require("url");

// Create server and captured our required endpoint
const httpServer = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  console.log(req.headers.host, req.method.toLowerCase());
  if (parsedUrl.pathname === "/hello" && req.method.toLowerCase() === "get") {
    const response = {
      text: "Hello, how are you doing?"
    };
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));
  } else {
    res.statusCose = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Sorry, page not found" }));
  }
});

// Start server and listen for connections
httpServer.listen(port, hostname, () => {
  console.log(`The server is running at http://${hostname}:${port}`);
});
