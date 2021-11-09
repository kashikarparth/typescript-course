//Union and Type Alias in TypeScript
var popularTags = ['dragon', 'coffee']; //type alias usage (easy to understand)
var dragonsTag = 'dragon';
var username = "alex"; //one type only
var pageName = "1"; //union for multiple allowable types
var errorMessage = null; //used very frequently if given variable can be null
var maybeNullUser = null;
//Void, Any, Never, Unknown
var doSomething = function () {
    console.log("doSomething");
}; //not returning anything is void return type
//void is undefind AND null
var foo = "foo"; //turns off typeScript completely 
console.log(foo.bar()); //no error
var neverSomething = function () {
    throw 'never';
}; //type never cant reach to end of execution, otherwise shows compile error;
var vAny = 10;
var vUnknown = 10;
var s1 = vAny; //no error
//let s2: string = vUnknown; //error, because TS doesnt know unknown datatype yet;
/*
console.log(vAny.foo());
console.log(vUnknown.foo()); //vUnknown gives error
*/
var s2 = vUnknown; //no error due to typeAlias
var pageNumber = "1";
var numericPageNumber = pageNumber; //type assertion chaining
