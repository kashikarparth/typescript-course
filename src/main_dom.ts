const someElement = document.querySelector(".foo") as HTMLInputElement; //Element is highest type in heirarchy, auto asserted by TS. More specific types exist in TS. 

console.log("someElement", someElement.value); //value is present in HTMLInputElement, not in Element type; 

const genericElement =  document.querySelector(".foo");
genericElement.addEventListener("blur", (event) => {
    const target = event.target as HTMLInputElement;
    console.log("event", target.value);
}) //Event is same generic superclass as Element from elements

/*The whole idea is to use as operator for typescript to understand what element / event / situation you are dealing with. It will resort to generic types highest in respective heirarchies
and need to be made more narrow / specific by the programmer. */