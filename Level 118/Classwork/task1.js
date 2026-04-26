const http = require("http");

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  console.log(`Method: ${method}, URL: ${url}`);

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  res.write("HELOO MY BRADAR!!!!!!!!!");
  res.write(`Method: ${method}`);
  res.write(`URL: ${url}`);

  res.end();
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
