const addId = <T extends object>(obj: T) => {            //if not declared, obj gets type 'any', which is not ideal
    const id = Math.random().toString(16);
    return {
        ...obj,
        id
    }
} //declaring as a generic, extends object is used to make sure that generic type is an object


interface UserInterface2<T, V = void> {
    name: string;
    data: T;
    meta?: V;
} //generic interface

const userGeneric : UserInterface2<{meta: string}, string> = {
    name: 'Jack',
    data: {meta: "food"},
    meta: "bar"
}

const userGeneric2: UserInterface2<string[]> = {
    name: 'John',
    data: ['foo', 'bar']
}

const result = addId<UserInterface2<{meta: string}, string>>(userGeneric); //calling as a generic
//const result2 = addId<string>("foo") //throws error due to extends object


console.log("result", result);