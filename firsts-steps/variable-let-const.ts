// HELLO WORLD
let message: string = 'HELLO WORLD!';
console.log(message); //HELLO WORLD!

// TYPE OF VARIABLES
let book:string = 'Pragmatic Programmer';
let decimal:number = 34.43;
let authorizing:boolean = true;
console.log(book, decimal, authorizing)

//  create LISTS
let numbers: number[] = [43, 65, 12, 234, 87, 2, 23, 87654, 12345]
console.log(numbers)

// create type of DATA MIXT
type mixt = string | number | boolean | string[];
let mixtData: mixt[] = ['text', 24, true, ['list from other list']];
console.log(mixtData)

// maps OBJECTS or DICTIONARIES: they allow us to access a property using a key
let gamers:{[key: number]: string} = {
  10: 'Messi',
  7: 'Christiano Ronaldo'
}
console.log(gamers)
let countries: Record<string, string> = {
  EC: 'Ecuador',
  PE: 'Peru',
  AR: 'Argentina',
  MX: 'Mexico'
}
console.log(countries)
let users: Record <string, string[]> ={
  'Juan': ['juanito_2@gmail.com'],
  'Ricardo': ['ricardo@gmail.com', 'recardito@hotmail.com']
}
console.log(users)

// CONSTANTS
// Being constant, its value does not change and it is not necessary to assign the type of variable
const pi: number = 3.14151634567;
const pi2 = 3.1415879