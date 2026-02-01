// var-ით იქმნება გლობალური ცვლადი რომელიც შეგვიძლია კოდის ნებისმიერ ნაწილში გამოვიყენოთ
var global = 'deme'

// let ლოკალური ცვლადი რომელსაც გამოვიყენებთ იქ სადაც შევქმნით (ფუნქციებში ან მათ გარეთ)
let user = 'khosro123'

// const ასევე ლოკალური ცვლადი მაგრამ მისი მნიშვნელობა არ იცვლება
const password = '12345678'



// ლექსიკური ფარგალი ანუ scope არის ხედვის არეალი, პროგრამირებაში ნიშნავს თუ სად შეგვიძლია შექმნილი ცვლადის გამოყენება
function outerScope() {
    let user = 'deme123'

    function innerScope() {
        user = 'khosro123'
        console.log(user)
    }

    innerScope()
}

// innerScope შეუძლია დაინახოს outerScope-ში შექმნილი ცვლადი

outerScope()