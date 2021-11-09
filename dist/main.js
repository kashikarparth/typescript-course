//Variables in TypeScript
var hello = "world"; //type world
//hello = 'error';
var hello1 = "world"; //type string
hello1 = 'changed';
//hello1 = true; cant assign to string type
//functions
var getFullName = function (name, surname) {
    return name + " " + surname;
};
var user = {
    name: 'Parth',
    age: 23,
    getMessage: function () {
        return 'Hello' + name;
    }
};
var user2 = {
    name: "Jack",
    getMessage: function () {
        return 'Hello' + name;
    }
};
/*
age missing error if age mandatory in interface
? operator in JS makes it not mandatory
*/
console.log(user.getMessage());
