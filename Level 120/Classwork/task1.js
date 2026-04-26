const http = require("http")

const server = http.createServer((req, res) => {
    switch (req.method) {
    case "GET":
        res.end(JSON.stringify(products))
        break;
    }
})

server.listen(3000, () => console.log("Listening on port 3000"))

let products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        forSale: true
    },
    {
        id: 2,
        title: "PC",
        price: 2500,
        forSale: false
    },
    {
        id: 3,
        title: "SmartPhone",
        price: 1000,
        forSale: true
    }
]