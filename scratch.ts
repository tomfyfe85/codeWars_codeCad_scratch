function joinCharacters(N: number, characterStream: string): void {
  
  const joinedString = characterStream.replace(/\s/g, '');

  
  console.log(joinedString);
}

joinCharacters(4, "o m a r");