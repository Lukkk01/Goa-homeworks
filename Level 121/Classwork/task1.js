const express = require("express");
const app = express();

const products = [
    {
        id: 0,
        title: "Smart Phone",
        price: 1500
    },
    {
        id: 2,
        title: "Smart Watch",
        price: 200
    },
    {
        id: 3,
        title: "Mac Book",
        price: 2000
    }
]


app.get("/products", (req, res) => {
  res.status(200).json(products);
});


app.listen(3000, () => {console.log("gisment batono port 300-ze");});