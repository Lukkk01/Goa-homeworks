const fs = require('fs');
const stream = fs.createWriteStream('myData.txt');

stream.write('Line 1: Hello\n');
stream.write('Line 2: Node.js\n');
stream.write('Line 3: Streams\n');
stream.write('Line 4: Timers\n');
stream.write('Line 5: Done\n');

const timeout = setTimeout(() => {
  console.log('setTimeout worked');
}, 1000);

const interval = setInterval(() => {
  console.log('setInterval working...');
}, 500);

const immediate = setImmediate(() => {
  console.log('setImmediate worked');
});

clearTimeout(timeout);
clearInterval(interval);
stream.end();
