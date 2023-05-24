const findOdd = (xs: number[]): number => {
  let final: number | undefined;
  const newXs = xs.sort((a, b) => a - b)
  if (newXs.length === 1) {
    return xs[0]
  } else {
    for (let num = newXs[0]; num <= newXs.slice(-1)[0]; num++) {
      let newArr = newXs.filter(x => x === num)
      console.log(newArr)
      if (newArr.length % 2 !== 0) {
        final = newArr[0]
      }
    }
  }
  return final || 0
}


console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]))