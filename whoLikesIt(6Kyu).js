const likes = (a) => {
    if(a.length === 0){
      return `no one likes this`
    } else if(a.length === 1){
      return `${a[0]} likes this`
    } else if(a.length === 2){
      return `${a[0]} and ${a[1]} likes this`
    } else if(a.length === 3){
      return `${a[0]}, ${a[1]} and ${a[2]} likes this`
    } else if (a.length >= 4) {
      return `${a[0]}, ${a[1]} and ${a.length - 2} others likes this`
    }
}
const a = ['Jacob', 'Mark', 'Max']
  console.log(likes(a))