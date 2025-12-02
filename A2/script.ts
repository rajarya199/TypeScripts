//types
//primitive types (string, number, boolean, null, undefined, symbol, bigint)
//reference type (object, array, function)

//array vs tuple
let fruits: string[] = ["apple", "banana", "cherry"]; //array ->datatype for all elements
let person: [string, number] = ["Alice", 30]; //tuple ->datatype for each element
//person = ["Bob", "thirty"]; // Error: Type 'string' is not assignable to type 'number'


//
let naam:string="hari"
let age:number=55
let isAdmin:boolean=true


//type inference
let city = "Kathmandu"; // TS knows it is string


//any  vs unknowm

//any disables type checking.
//unknown is safer and requires type checking before usage.


let data: any;

data = "Hello";
data = 123;
data = true;

data.toUpperCase(); // No error (but if data is number → runtime crash)


let value: unknown;

value = "Hello";
value = 123;
value = true;

// ❌ Not allowed without checking:
// value.toUpperCase(); // ❌ ERROR

 value = "Hello TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✔ Safe
}

//object type
let user:{name:string,age:number}={
    name:"ram",
    age:44
}

//union type -allow multiple types
let score:string |number;
score=100;
score="A+"