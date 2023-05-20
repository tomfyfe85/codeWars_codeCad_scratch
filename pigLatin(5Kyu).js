const pigLt = (string) => {
  const array = [];

  const str = string.split(/(\W+)/);
  str.forEach((word) => {
    if (/^[A-Za-z0-9]*$/.test(word) && word !== "") {
      const firstLet = word.charAt(0);
      //   console.log(firstLet);
      const noFirstLet = word.slice(1);
      //   console.log(noFirstLet);
      const newWord = noFirstLet + firstLet;
      array.push(newWord + "ayy");
      console.log(array);
    } else if (word !== "") {
      //   console.log(word);
      array.push(word);
    }
  });
  return array.join("");
};

console.log(pigLt("Hello, There. TOM!"));

// /^[A-Za-z0-9]*$/
