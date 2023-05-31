class User{
  userName:string;
  age: number;
  alive: boolean

  constructor(
    userName:string, 
    age: number,
    alive: boolean,
  ) {
    this.userName = userName;
    this.age = age; 
    this.alive = alive;
  }

  showUser() {
    if(this.alive === true) {
      console.log(`
        ${this.userName} is ${this.age} years old, and is alive
      `)
    } else {
      console.log(`
        ${this.userName} is ${this.age} years old, and died
      `)
    }
  }
}

const user1 = new User('David', 20, true)
const user2 = new User('Olga', 90, false)

user1.showUser()
user2.showUser()
