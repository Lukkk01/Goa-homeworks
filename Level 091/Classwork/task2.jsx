/*
Vite + React პროექტის სტრუქტურა

node_modules/
- პროექტში გამოყენებული ყველა ბიბლიოთეკა

public/
- საჯარო სტატიკური ფაილები, რომლებიც build-ში 그대로 გადადის

src/
- აპლიკაციის მთავარი კოდი

  assets/
  - სურათები და სხვა რესურსები

  index.css
  - გლობალური CSS სტილები

  App.css
  - App კომპონენტის სტილები

  App.jsx
  - მთავარი React კომპონენტი

  main.jsx
  - აპლიკაციის entry point
  - აქ ხდება App-ის render

index.html
- მთავარი HTML ფაილი, სადაც React ერთვება

.gitignore
- Git-ში ასატვირთი ფაილების გამორიცხვა

package.json
- პროექტის კონფიგურაცია, scripts და dependencies

package-lock.json / yarn.lock / pnpm-lock.yaml
- დამოკიდებულებების ვერსიების დაფიქსირება

vite.config.js
- Vite-ის კონფიგურაცია

README.md
- პროექტის აღწერა
*/

function App() {
  return <h1>Vite + React</h1>;
}

export default App;
