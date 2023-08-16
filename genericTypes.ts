//  variable <Type>
function identity(arg: number): number {
  return arg;
}
function identity2(arg: any): any {
  return arg;
}
function identity3<Type>(arg: Type): Type {
  return arg;
}
let output = identity3<string>("myString")
let output2 = identity3("myString");

const  sameType  = <Type>(arg: Type):Type => {
  return arg
} 
console.log(sameType<string>("hello world"))

// other types
const otherTypes = <Type>(arg:Type[]): Type[] => {
  console.log(arg.length)
  return arg
}
const otherTypesAlternative = <Type>(arg: Array<Type>): Array<Type> => {
  console.log(arg.length)
  return arg
}



//  Generic Types
const identityTypes = <Type>(arg: Type): Type  =>{
  return arg;
} 
let myIdentityTypes: <Type>(arg: Type) => Type = identityTypes;

//  could different name for the generic
const genericTypes =<Input>(arg: Input): Input  =>{
  return arg;
} 
let myGenericTypes: <Input>(arg: Input) => Input = genericTypes;

const genericTypes2 = <Type>(arg: Type): Type => {
  return arg;
}
let myGenericTypes2: { <Type>(arg: Type): Type } = genericTypes2;

// generic interface
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
 
const identityInterface = <Type>(arg: Type): Type => {
  return arg;
}
 
let myIdentityInterface: GenericIdentityFn = identityInterface;


interface GenericIdentityFnOther<Type> {
  (arg: Type): Type;
}
 
const identityInterfaceOther = <Type>(arg: Type): Type => {
  return arg;
}
 
let myIdentityInterfaceOther: GenericIdentityFnOther<number> = identityInterfaceOther;



//  Generic Classes
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};
 
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));



// Generic Constraints
function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length);  // Property 'length' does not exist on type 'Type'.
  return arg;
}

interface Lengthwise {
  length: number;
}
 
const loggingIdentityConstraints = <Type extends Lengthwise>(arg: Type): Type => {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}
loggingIdentityConstraints(3);  // function restrict not type number
loggingIdentityConstraints({ length: 10, value: 3 });  // function with properties required



// Using Type Parameters in Generic Constraints
const getProperty = <Type, Key extends keyof Type>(obj: Type, key: Key) => {
  return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
getProperty(x, "m");  // Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.



// Using Class Types in Generics
function create<Type>(c: { new (): Type }): Type {
  return new c();
}
class BeeKeeper {
  hasMask: boolean = true;
}
 
class ZooKeeper {
  nametag: string = "Mikle";
}
 
class Animal {
  numLegs: number = 4;
}
 
class Bee extends Animal {
  numLegs = 6;
  keeper: BeeKeeper = new BeeKeeper();
}
 
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}
 
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
 
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;



// Generic Parameter Defaults
declare function create(): Container<HTMLDivElement, HTMLDivElement[]>;
// Cannot find name 'Container'.
declare function create<T extends HTMLElement>(element: T): Container<T, T[]>;
// Cannot find name 'Container'.
declare function create<T extends HTMLElement, U extends HTMLElement>(
  element: T,
  children: U[]
): Container<T, U[]>;
// Cannot find name 'Container'.

declare function create<T extends HTMLElement = HTMLDivElement, U = T[]>(
  element?: T,
  children?: U
): Container<T, U>;
// Cannot find name 'Container'.