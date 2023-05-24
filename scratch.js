// function joinCharacters(N, characterStream) {
//     var joinedString = characterStream.replace(/\s/g, '');
//     console.log(joinedString);
// }
// joinCharacters(4, "o m a r");

// const newInput = process.stdin.on("data", (data) => {
//   const newNum = parseInt(data);
//   return newNum;
//   //   process.stdout.write(data + "\n");
// });

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let number;
let string;

rl.question("", (numInput) => {
  number = parseInt(numInput);

  rl.question("", (strInput) => {
    string = strInput;

    function joinCharacters(num, str) {
      var joinedString = str.replace(/\s/g, "");
      return joinedString;
    }
    console.log(joinCharacters(number, string));
    rl.close();
  });
});
