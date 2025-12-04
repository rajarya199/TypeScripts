//interface

//basic interface
interface Aa{
    name:string;
    age:number;
}

const user2:Aa={
    name:"Sita",
    age:30
}

//optional and readonly properties
interface Product{
    id:number;
    name:string;
    price?:number; //optional
    readonly category:string //readonly -cananot be changed
}

const prod1:Product={
    id:1,
    name:"Laptop",
    category:"Electronics"
}

//interface extending

interface person{
    name:string;
}

interface Student extends Person{
    grade:number;
}

const s:Student={name:"Gita",grade:10}


//declaration merging
// This cannot be done with type aliases.
interface Box{
    width:number;
}

interface Box{
    length:number;
}

const b1:Box={
    width:10,
    length:20
}