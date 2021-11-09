//Union and Type Alias in TypeScript

type ID = string; //type alias
type PopularTag = string; //type alias
type MaybePopularTag  = PopularTag | null;  //type alias and union 



interface UserInterface {
    id : ID,
    name: string,
    surname : string
}

const popularTags: PopularTag[] = ['dragon', 'coffee'] //type alias usage (easy to understand)

const dragonsTag: MaybePopularTag = 'dragon';

let username: string = "alex"; //one type only

let pageName: string | number = "1"; //union for multiple allowable types

let errorMessage: string | null = null; //used very frequently if given variable can be null

let maybeNullUser: UserInterface | null = null;

//Void, Any, Never, Unknown

const doSomething = (): void => {
    console.log("doSomething");
} //not returning anything is void return type

//void is undefind AND null

let foo: any  = "foo"; //turns off typeScript completely 
console.log(foo.bar()); //no error

const neverSomething = (): never => {
    throw 'never';
} //type never cant reach to end of execution, otherwise shows compile error;

let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny; //no error
//let s2: string = vUnknown; //error, because TS doesnt know unknown datatype yet;

/*
console.log(vAny.foo());
console.log(vUnknown.foo()); //vUnknown gives error
*/

let s2: string = vUnknown as string; //no error due to typeAlias

let pageNumber: string = "1";
let numericPageNumber: number = pageNumber as unknown as number; //type assertion chaining