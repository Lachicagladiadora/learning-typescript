// LOOPS -> allow repeat code (ideal to run the same code for each element of a list)

// FOR OF
let books:string[] = ['templado', 'fangirl', 'abzhurdah']
for(let book of books) {
  console.log(book)
}

// let nums:number[] = [2, 5, 9, 7, 32, 12]
// for(let num of nums) {
//   console.log (num * 4)
// }

// WHILE
let wholes:number = 10
let emergency:number = 20
while(wholes <= emergency){
  console.log(wholes)
  wholes++
}