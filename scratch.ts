// function joinCharacters(N: number, characterStream: string): void {
  
//   const joinedString = characterStream.replace(/\s/g, '');

  
//   console.log(joinedString);
// }

// joinCharacters(4, "o m a r");

function main(): void {
  let number: number | undefined;
  let string: string | undefined;

  const stdin = process.openStdin();
  const inputChunks: Buffer[] = [];

  stdin.on('data', (chunk: Buffer) => {
    inputChunks.push(chunk);
  });

  stdin.on('end', () => {
    const input = Buffer.concat(inputChunks).toString();
    const lines = input.trim().split('\n');

    if (lines.length >= 2) {
      number = parseInt(lines[0].trim(), 10);
      string = lines[1].trim();
    }

    if (number !== undefined && string !== undefined) {
      const words: string[] = string.split(' ');
      const result: string = words.join('');

      console.log(result);
    }
  });
}



// function joinCharacters(N: number, characterStream: string): void {

//   const num = stdin.on('', () => {
  
// })   
//   const joinedString = characterStream.replace(/\s/g, '');

  
//   console.log(joinedString);
// }


// const stdin = process.openStdin();

// stdin.on('data', data => {
//   console.log(`You typed ${data.toString()}`);
//   process.exit();
// });