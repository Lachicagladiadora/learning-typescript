// CONDITIONALS  -> allow us to control the flow of our code, based on different conditions
let allow: boolean = true;

if(allow){
  console.log('You can enter')
} else {
  console.log('Can not enter')
}


let whole: number = 100

if(whole === 99) {
  console.log('Is 99')
} else if (whole === 100) {
  console.log('Is 100')
} else {
  console.log('Not 99 nor 100')
}


type options = 'green' | 'yellow' | 'red'
let color: string = 'yellow'
color = 'green'
// color = 'red'
// color = 'pink'
// por casting le pasamos las opciones de color al switch
switch(<options>color){
  case 'green':
    console.log('you can pass')
    break
  case 'yellow':
    console.log('you can almost pass')
    break
  case 'red':
    console.log('you can not pass')
    break
  default:
    console.log('ERROR')
    break
}
