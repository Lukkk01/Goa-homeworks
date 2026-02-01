const data = [
  { "id": 1, "name": "alex", "balance": 1500 },
  { "id": 2, "name": "nick", "balance": 800 },
  { "id": 3, "name": "demetre", "balance": 3200}
];

const dataString = JSON.stringify(data);
localStorage.setItem('userData', dataString);

const storedString = localStorage.getItem('userData');
const retrievedData = JSON.parse(storedString);

console.log(retrievedData);