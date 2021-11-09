var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserClass = /** @class */ (function () {
    function UserClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }
    UserClass.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    }; //made mandatory due to interface implementation
    UserClass.maxAge = 50; //accessible by the class directly
    return UserClass;
}()); //everything is public by default
var userInstance = new UserClass('Parth', 'Kashikar');
console.log(userInstance.getFullName()); //rest gives error as trying to access private from outside
//protected -> accessible to class and child classes
console.log(UserClass.maxAge); //no errors, accessible via User, and not via userInstance
//Inheritance
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEdiitor = function () {
        return this.editor;
    };
    return Admin;
}(UserClass)); //inherited from UserClass
var admin = new Admin('Parth', 'Kashikar'); //the constructor is inherited along with other non private entities
console.log(admin.getFullName());
