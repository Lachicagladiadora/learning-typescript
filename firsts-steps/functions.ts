// FUNCTIONS
function add(first: number, second: number): number {
  return first + second
}
let result = add(3,6)
console.log(result)


function multiply(f: number, s:number): void {
  console.log(f * s)
}
multiply(9, 2)


const animals = ['dog', 'cat', 'bonny', 'chicken']
function printFirstElement(list: any[]): void {
  console.log(list[0])
}
printFirstElement(animals)


function quicksort(list: number[]): number[] {
  if(list.length <= 1) return list
  let pivot = list[0]
  let left: number[] = []
  let right: number[] = []
  for(let i = 1; i < list.length; i++){
    list[1] < pivot ? left.push(list[i]) : right.push(list[i])
  }
  return quicksort(left).concat(pivot, quicksort(right))
}

let numbers: number[] = [23, 45, 16, 37, 3, 99, 22]
let orderedList: number[] = quicksort(numbers)
console.log(orderedList)