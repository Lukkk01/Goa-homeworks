// document.getElementsByTagName
// აბრუნებს ყველა ელემენტს მითითებული თეგით
const divs = document.getElementsByTagName("div");
console.log("getElementsByTagName:", divs);
///////////////////////////////////////////////////
// document.getElementsByClassName
// აბრუნებს ყველა ელემენტს მითითებული კლასით
const products = document.getElementsByClassName("product");
console.log("getElementsByClassName:", products);
///////////////////////////////////////////////////
// previousElementSibling
// აბრუნებს ელემენტს, რომელიც HTML-ში მოცემულია უშუალოდ მის წინ
const secondProduct = products[1];
console.log("Previous element:", secondProduct.previousElementSibling);
///////////////////////////////////////////////////
// nextElementSibling
// აბრუნებს ელემენტს, რომელიც მოცემულია მის შემდეგ
console.log("Next element:", secondProduct.nextElementSibling);
///////////////////////////////////////////////////
// firstChild
// აბრუნებს ელემენტის პირველ შვილის ნოდს (შეიძლება იყოს ტექსტიც ან ელემენტი)
const firstDiv = document.getElementById("special-product");
console.log("firstChild:", firstDiv.firstChild);
///////////////////////////////////////////////////
// lastChild
// აბრუნებს ელემენტის ბოლო შვილის ნოდს
onsole.log("lastChild:", firstDiv.lastChild);
