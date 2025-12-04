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