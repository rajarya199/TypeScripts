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