const http = require("http");

const server = http.createServer((req, res) => {
  const method = req.method;

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  switch (method) {
    case "GET":
      res.write("<h1>GET request</h1>");
      break;

    case "POST":
      res.write("<h1>POST request</h1>");
      break;

    case "PUT":
      res.write("<h1>PUT request</h1>");
      break;

    case "DELETE":
      res.write("<h1>DELETE request</h1>");
      break;

    default:
      res.write("<h1>Unknown method</h1>");
  }

  res.end();
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
