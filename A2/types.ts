type Classmates={
    section:string
}

type Students={
    name:string
}

type ClassmatesInStudents=Classmates & Students; //combine both types

let a:ClassmatesInStudents={
    name:"hari",
    section:"sun"
}

//type can defined any type,not just object
//primitives,union,intersection,function,tuples,object types


//object type
type User={
    name:string,
    age:number
}

//union type
type Score=string | number;
let marks:Score=101;
marks="A-";

//function type
type Add=(a:number,b:number)=>number;

const sum:Add=(x,y)=>x+y;


