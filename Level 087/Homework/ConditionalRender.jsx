function ConditionalRender() {
  const isLoggedIn = true;
  return (<>
    <div>
      {isLoggedIn ? <p>Welcome</p> : <p>Please log in</p>}
    </div>
  </>)
}

export default ConditionalRender;

{/*

კომპონენტი არის რეაქტის აპლიკაციის "სამშენებლო ბლოკი", ის არის ფუნცქია ანუ კოდის ბლოკი რომელიც შეგვიძლია ბევრჯერ გამოვიყენოთ და ის გვიბრუნებს ელემენტებს
return გვიბრუნებს იმ ელემენტებს რასაც გადავცემთ
JSX - javascript-ის სინტაქსის გაფართოება ანუ ბიბლიოთეკა რომელიც საშუალებას გვაძლევს HTML CSS JS დავწეროთ ერთ ფაილში
React-ში class მაგივრად className იმიტომ ვიყენებთ რომ class javascript-ში არის რეზერვირებული სიტყვა
მაგალითად onClick რომლის მნიშვნელობა არ შეიძლება იყოს სტრინგი, აუცილებლად უნდა იყოს ფუნქცია 

  */}