type name=string;
// type name=number; using same type name again will give error

//but same name interface are merged directly
interface Human{
    name:string;
}

interface Human{
    age:number;
}  // so human interfsce have both name and age properties

const h:Human={name:"Ram",age:25}


interface Food{
    name:string;
    price:number;
}

interface MithaFood extends Food{
    verySweet:boolean
} //name,price,verySweet

interface KhattaFood extends Food{
    verySour:boolean
} //name,price,verySour

function getMithaai(mithaai:MithaFood){
    mithaai.verySweet
}
function getKhattaFood(khattaFood:KhattaFood){
    khattaFood.verySour
}