// ვქმნით ცვლადებს, რომლებსაც გამოვიყენებთ ობიექტის კუთვნილებების სახელებად
let prop1 = "first";
let prop2 = "last";
let dynamic = "bal";
let concatProp = prop1 + "_" + prop2;

let account = {
    [prop1]: "My",
    [prop2]: "Account",
    [concatProp]: "FullName",
    [dynamic + "_ance"]: 0,
    
    deposit(amount) {
        this.balance += amount;
    }
};

// ორჯერ გამოვიძახოთ deposit() მეთოდი
account.deposit(50);
account.deposit(150);

// ვქმნით person ობიექტს
let person = {
    name: "LUKA",
    age: 14,
    balance: 1500
};

let personAccount = Object.assign({}, account, person);

// ვბეჭდავთ სამივე ობიექტს
console.log("account:", account);
console.log("person:", person);
console.log("personAccount:", personAccount);

let dataArr = [10, 20, 30];

let [a, b, c] = dataArr;

console.log("Destructured:", a, b, c);
