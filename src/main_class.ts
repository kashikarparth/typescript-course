interface UserImplementInterface {
    getFullName(): string;
}

class UserClass implements UserImplementInterface{
    private firstName: string;
    private lastName: string;
    readonly unchangeableName: string; //can set in constructor only
    static readonly maxAge = 50; //accessible by the class directly

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    } //made mandatory due to interface implementation

    /*
    changeUnchangeableName(): void{
        this.unchangeableName = this.lastName;
    } //thorws error due to readonly
    */

} //everything is public by default

const userInstance : UserClass = new UserClass('Parth', 'Kashikar');

console.log(userInstance.getFullName()) //rest gives error as trying to access private from outside
//protected -> accessible to class and child classes

console.log(UserClass.maxAge); //no errors, accessible via User, and not via userInstance


//Inheritance

class Admin extends UserClass {
    private editor: string;

    setEditor(editor: string): void {
        this.editor = editor;
    }

    getEdiitor(): string{
        return this.editor;
    }
} //inherited from UserClass

const admin = new Admin('Parth', 'Kashikar'); //the constructor is inherited along with other non private entities
console.log(admin.getFullName());