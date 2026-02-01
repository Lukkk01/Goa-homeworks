/*
 Side Effect React-ში:
Side effect არის მოქმედება, რომელიც არ ეხება პირდაპირ UI-ის დახატვას,
მაგრამ გავლენას ახდენს გარე სამყაროზე.
მაგალითად:
- API-დან მონაცემების წამოღება
- document.title-ის შეცვლა
- localStorage-ში ჩაწერა
- setTimeout / setInterval
- event listener-ები

ასეთი ლოგიკა არ უნდა ეწეროს პირდაპირ component body-ში.
ამისთვის გამოიყენება useEffect.
*/

import { useState, useEffect } from "react";

function ExampleComponent() {
  /*
   რას აკეთებს useState:
  - ინახავს კომპონენტის state-ს
  - state-ის შეცვლისას ხდება re-render

   როდის იძახება useState:
  - იძახება ყოველ render-ზე
  - initial value გამოიყენება მხოლოდ პირველ render-ზე
  */

  // მაგალითი 1: counter
  const [count, setCount] = useState(0);

  // მაგალითი 2: input-ის მნიშვნელობა
  const [name, setName] = useState("");

  // მაგალითი 3: toggle (true / false)
  const [isOpen, setIsOpen] = useState(false);

  /*
  რა განსხვავებაა ჩვეულებრივ ლოგიკასა და useEffect-ს შორის:
  - ჩვეულებრივი ლოგიკა სრულდება render-ის დროს
  - useEffect სრულდება render-ის შემდეგ
  - side effect-ები უნდა იყოს useEffect-ში
  */

  /*
  useEffect-ის პირველი არგუმენტი (callback):
  - შეიცავს side effect ლოგიკას
  - სრულდება render-ის შემდეგ
  - შეუძლია დააბრუნოს cleanup ფუნქცია
  */

  /*
   useEffect-ის მეორე არგუმენტი (dependency array):
  - განსაზღვრავს როდის გაეშვას effect
  */

  // dependency array არ არის გადაცემული
  // effect სრულდება ყოველ render-ზე
  useEffect(() => {
    console.log("ეს effect სრულდება ყოველ render-ზე");
  });

  // dependency array ცარიელია
  // effect სრულდება მხოლოდ პირველ render-ზე (mount)
  useEffect(() => {
    console.log("ეს effect სრულდება მხოლოდ ერთხელ");

    return () => {
      console.log("კომპონენტი იშლება");
    };
  }, []);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  /*
  როდის იძახება useEffect lifecycle-ში:
  - mount-ის შემდეგ
  - update-ის შემდეგ (dependency-ზე დამოკიდებით)
  - unmount-ის დროს (cleanup)
  */

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <br /><br />

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="შეიყვანე სახელი"
      />
      <p>Name: {name}</p>

      <br />

      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
    </div>
  );
}

export default ExampleComponent;
