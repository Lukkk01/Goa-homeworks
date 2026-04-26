const fs = require("fs");


fs.writeFile("./info.txt", "This is some info text.\n", (err) => {
  if (err) {
    console.log("Error writing to info.txt:", err);
    return;
  }

  console.log("info.txt written successfully!");

  fs.writeFile("./reply.txt", "First line in reply file.\n", (err) => {
    if (err) {
      console.log("Error writing to reply.txt:", err);
      return;
    }

    console.log("reply.txt created!");


    fs.appendFile("./reply.txt", "Added more text.\n", (err) => {
      if (err) {
        console.log("Error appending to reply.txt:", err);
        return;
      }

      console.log("Text appended to reply.txt!");
    });
  });
});