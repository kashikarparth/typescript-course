var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
}; //declaring as a generic, extends object is used to make sure that generic type is an object
var userGeneric = {
    name: 'Jack',
    data: { meta: "food" },
    meta: "bar"
};
var userGeneric2 = {
    name: 'John',
    data: ['foo', 'bar']
};
var result = addId(userGeneric); //calling as a generic
//const result2 = addId<string>("foo") //throws error due to extends object
console.log("result", result);
