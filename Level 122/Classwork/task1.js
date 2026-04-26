const http = require('http');
const { JSON } = require('stream/consumers');


const products = [
    {
        id: 0,
        title: "Smart Phone",
        price: 1500
    },
    {
        id: 1,
        title: "Smart Watch",
        price: 200
    },
    {
        id: 2,
        title: "Mac Book",
        price: 2000
    }
]

const getInfo = (req, callback) => {

    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        callback(JSON.parse(body || '{}'));
    });
};


const server = http.createServer((req, res) => {
    switch (req.method) {
        case 'GET':
            return res.end(JSON.stringify(products));

        case 'POST':
            getInfo(req, (newProduct) => {
                products.push(newProduct);  
                res.end(JSON.stringify(products));
            });   
            break;
            
        case "PUT":
            getInfo(req, (updatedProduct) => {
                if (Object.keys(updatedProduct).length === 0) {
                    return res.end("invalid PUT request");
                }

                const found = products.find((prod) => prod.id === updatedProduct.id);

                if (!found) {
                    return res.end("Product not found");
                }

                if (
                    found.title === updatedProduct.title &&
                    found.price === updatedProduct.price
                 ) { 
                        return res.end("Nothing to update");  
                }

                products[products.indexOf(found)] = updatedProduct;
                res.end(JSON.stringify(products));
            });
            break;

        case "DELETE":
            getInfo(req, (productToDelete) => {
                const toBeDeletedArr = products.find((prod) => prod.id === productToDelete.id);
                if (!toBeDeletedArr) {
                    return res.end("Product not found");
                }
                products.splice(products.indexOf(toBeDeletedArr), 1);
                res.end(JSON.stringify(products));
            });
            break;
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});