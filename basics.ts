let userName:string = "Jack"
let hasLoggedIn:boolean = true;
userName += "Leo";

console.log(userName)

let myNumber:number = 10;

let myRegex:RegExp = /foo/;


const names:string[] = userName.split(" ");
const myValues: Array<number> = [1,2,3];

const myObject:User = {
    first:"Jack",
    last : "Leo",
}


interface User {
    first:string,
    last:string
}

const ids:Record<number,string> = {
    10: "a",
    20: "b",
}

ids[30]='c'

if (ids[30]==='D'){

}

for (let i = 0; i < names.length; i++) {}

[1,2,3].forEach((v)=>console.log(v))