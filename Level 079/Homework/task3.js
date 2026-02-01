const user = {name: "Demetre", level: 80, score: 100}

for (let key in user) {
    console.log(`${key}: ${user[key]}`)
}

// for in ამ შემთხვევაში გამოვიყენებთ რომ გადაუაროს ყველა key-ს user ობიექტში
// ის არის EC6-ის გაადვილებული სინტაქსი რომლითაც შეგვიძლია ობიექტის გასაღებებს გადავუაროთ