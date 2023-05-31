// POO -> transform a real world concept into code

interface Lang{
  name: string,
  age?: number, // "?" indicates that it is optional
  description: Function,
}

// let javascript: Lang = {
//   name:'javascript',
//   age:1995,
//   description: function(){
//     console.log(`${this.name} was created ${this.age}`)
//   }
// }
// javascript.description()

class Language implements Lang {
  name: string;
  age: number;
  
  constructor(name:string, age:number) {
    this.name = name;
    this.age = age;
  }
  description(): void {
    console.log(`${this.name} was created ${this.age}`)
  } 
}

let html = new Language('HTML', 1993)
html.description()
let css = new Language('CSS', 1996)
css.description()
let js = new Language('JavaScript', 1995)
js.description()
