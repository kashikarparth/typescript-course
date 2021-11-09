//Variables in TypeScript

const hello = "world"; //type world
//hello = 'error';

let hello1 : string = "world"; //type string
hello1 = 'changed';
//hello1 = true; cant assign to string type

//functions

const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
}

//console.log(getFullName(true, ["foo"])) no error unless we specify types
//console.log(getFullName("Monster", "Less")) no error now

//Objects and Interfaces in TypeScript

interface User {
    name: string,
    age?: number,
    getMessage(): string; //function inside interface
}

const user: User = {
    name: 'Parth',
    age: 23,
    getMessage(){
        return 'Hello' + name;
    }
}


const user2 : User = {
    name: "Jack",
    getMessage(){
        return 'Hello' + name;
    }
}
/*
age missing error if age mandatory in interface
? operator in JS makes it not mandatory
*/

console.log(user.getMessage())


