var StatusEnum;
(function (StatusEnum) {
    StatusEnum["Started"] = "started";
    StatusEnum["NotStarted"] = "notStarted";
    StatusEnum["Done"] = "done";
})(StatusEnum || (StatusEnum = {})); //keys correspond to integer values starting from 0  by default
console.log(StatusEnum.NotStarted); //1 (by default)
var notStartedEnum = StatusEnum.Started;
//postfix or prefix everything, "StatusEnum"
