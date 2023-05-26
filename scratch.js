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

// Node.js program to demonstrate the
// process.stdin Property

// Enter any texts ( User input)
// let string;
// process.stdin.on("data", (data) => {
    
// const reg = new RegExp('^[0-9]+$');

    
//   string = data.toString();
//   if (!reg.test(string)) {
//     console.log(string);
//   }
// });

// if () {
//     console.log("if");
//     let joinedString = string.replace(/\s/g, "");
//     console.log(joinedString);
//   }

import { createInterface } from 'readline';

async function readStdin(): Promise<string> {
    let data = '';

    const readlineInterface = createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    for await (const line of readlineInterface) {
        data += line + '\n';
    }

    return data;
}

async function main() {
    const input = await readStdin();
    if (input.trim().endsWith("0")) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

main();