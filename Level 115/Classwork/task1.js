const bufe = Buffer.from("Luka");

console.log(bufe); 
console.log(bufe.toString());

/////////////////////////////////////////////

const text = "luka";
const buf = Buffer.from(text);

console.log(buf); 
console.log(buf.toString());

////////////////////////////////////////////////

const buf1 = Buffer.from("Luka ");
const buf2 = Buffer.from("teacher");

const result = Buffer.concat([buf1, buf2]);

console.log(result.toString());