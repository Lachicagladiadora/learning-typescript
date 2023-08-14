// Awaited<Type>
type A = Awaited<Promise<string>>;
type AA = string
 
type B = Awaited<Promise<Promise<number>>>;
type BB = number
 
type C = Awaited<boolean | Promise<number>>;
type CC = number | boolean



// Partial<Type> 
type Todo = {
  title: string;
  description: string;
}
type OptionalTodo = Partial<Todo> // convert optional properties

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash", // optional
});

const todoTest:OptionalTodo = {
  description: 'hello'
}



// Required<Type>
interface Props {
  a?: number;
  b?: string;
}
 
const obj: Props = { a: 5 };
 
const obj2: Required<Props> = { a: 5 };
const objRequired: Required<Props> = { a: 34, b:'hello'}



// Readonly<Type>
interface TodoReadonly { title: string;}
 
const todoReadonly: Readonly<TodoReadonly> = {
  title: "Delete inactive users",
};
 
todoReadonly.title = "Hello";  // cannot be reassigned

function freeze<Type>(obj: Type): Readonly<Type>;  // Object.freeze



// Record<Keys, Type>
interface CatInfo {
  age: number;
  breed: string;
}
 
type CatName = "miffy" | "boris" | "mordred";
 
const cats: Record<CatName, CatInfo> = { // assign the properties of one type to another type.
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
 
cats.boris;
 

// Pick<Type, Keys>
// interface TodoPick {
//   title: string;
//   description: string;
//   completed: boolean;
// }
 
// type TodoPreview = Pick<TodoPick, "title" | "completed">;
 
// const todoPickPreview: TodoPreview = {
//   title: "Clean room",
//   completed: false,
// };
 
// todoPickPreview;



// Omit<Type, Keys>
// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
//   createdAt: number;
// }
 
// type TodoPreview = Omit<Todo, "description">;
 
// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
//   createdAt: 1615544252770,
// };
 
// todoPickPreview;
 
// const todo: TodoPreview
 
// type TodoInfo = Omit<Todo, "completed" | "createdAt">;
 
// const todoInfo: TodoInfo = {
//   title: "Pick up kids",
//   description: "Kindergarten closes at 5pm",
// };
 
// todoInfo;



// Exclude<UnionType, ExcludedMembers>
type T0 = Exclude<"a" | "b" | "c", "a">; // type T0 = "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>; // type T2 = string | number
 
type ShapeExclude =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
 
type T3 = Exclude<ShapeExclude, { kind: "circle" }> 



// Extract<Type, Union>
type T00 = Extract<"a" | "b" | "c", "a" | "f">; // type T0 = "a"
type T11 = Extract<string | number | (() => void), Function>; // type T1 = () => void
type ShapeExtract =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
type T22 = Extract<ShapeExtract, { kind: "circle" }>




// NonNullable<Type>  ->  exclude "null" &  "undefined"
type TNullable = NonNullable<string | number | undefined>;
type TN = NonNullable<string[] | null | undefined>;



// Parameters<Type>  ->  tuple from the types of the parameters of a function
declare function f1(arg: { a: number; b: string }): void; 
 
type TPar0 = Parameters<() => string>;
type TPar1 = Parameters<(s: string) => void>;
type TPar2 = Parameters<<T>(arg: T) => T>;
type TPar3 = Parameters<typeof f1>;
type TPar4 = Parameters<any>;
type TPar5 = Parameters<never>;
type TPar6 = Parameters<string>;
type TPar7 = Parameters<Function>;



// ConstructorParameters<Type>  -> tuple from a constructor function
type TConstPar0 = ConstructorParameters<ErrorConstructor>;
type TConstPar1 = ConstructorParameters<FunctionConstructor>;
type TConstPar2 = ConstructorParameters<RegExpConstructor>;
class Constructor {
  constructor(a: number, b: string) {}
}
type TConstPar3 = ConstructorParameters<typeof Constructor>;
type TConstPar4 = ConstructorParameters<any>;
type TConstPar5 = ConstructorParameters<Function>;



// ReturnType<Type>
declare function f1(): { a: number; b: string };
 
type TReturn0 = ReturnType<() => string>;
type TReturn1 = ReturnType<(s: string) => void>;
type TReturn2 = ReturnType<<T>() => T>;
type TReturn3 = ReturnType<<T extends U, U extends number[]>() => T>;
type TReturn4 = ReturnType<typeof f1>;
type TReturn5 = ReturnType<any>;
type TReturn6 = ReturnType<never>;
type TReturn7 = ReturnType<string>;
type TReturn8 = ReturnType<Function>;


// InstanceType<Type>
class CCC {
  x = 0;
  y = 0;
}
type TInstance0 = InstanceType<typeof C>;
type TInstance1 = InstanceType<any>;
type TInstance2 = InstanceType<never>;
type TInstance3 = InstanceType<string>;
type TInstance4 = InstanceType<Function>;



// ThisParameterType<Type>  -> extracts the type of a function parameter
function toHex(this: Number) {
  return this.toString(16);
}
function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}


// OmitThisParameter<Type>
function toHexOmit(this: Number) {
  return this.toString(16);
}
const fiveToHex: OmitThisParameter<typeof toHexOmit> = toHexOmit.bind(5);
console.log(fiveToHex());


// ThisType<Type>
// type ObjectDescriptor<D, M> = {
//   data?: D;
//   methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
// };
 
// function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
//   let data: object = desc.data || {};
//   let methods: object = desc.methods || {};
//   return { ...data, ...methods } as D & M;
// }
 
// let objThis = makeObject({
//   data: { x: 0, y: 0 },
//   methods: {
//     moveBy(dx: number, dy: number) {
//       this.x += dx; // Strongly typed this
//       this.y += dy; // Strongly typed this
//     },
//   },
// });
 
// objThis.x = 10;
// objThis.y = 20;
// objThis.moveBy(5, 5);


// Intrinsic String Manipulation Types
// Uppercase<StringType>
// Lowercase<StringType>
// Capitalize<StringType>
// Uncapitalize<StringType>