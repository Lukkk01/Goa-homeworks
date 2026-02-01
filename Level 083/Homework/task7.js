fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < 5; i++) {
            console.log(data[i].title);
        }
    });

// response.json() არის მეთოდი რომელიც იღებს Response ობიექტს და აბრუნებს დაპირებას რომელიც გადადის ჯავასკრიპტის ობიექტად ან მასივად. ჩვენ ვიყენებთ მას იმისთვის რომ გადავიყვანოთ მიღებული მონაცემები JSON ფორმატიდან ჯავასკრიპტის ობიექტებად რო შევძლოთ მათი გამოყენება