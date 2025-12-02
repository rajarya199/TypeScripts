//types
//primitive types (string, number, boolean, null, undefined, symbol, bigint)
//reference type (object, array, function)

//array vs tuple
let fruits: string[] = ["apple", "banana", "cherry"]; //array ->datatype for all elements
let person: [string, number] = ["Alice", 30]; //tuple ->datatype for each element
//person = ["Bob", "thirty"]; // Error: Type 'string' is not assignable to type 'number'


//
let user:string="hari"
let age:number=55
let isAdmin:boolean=true


//type inference
let city = "Kathmandu"; // TS knows it is string
