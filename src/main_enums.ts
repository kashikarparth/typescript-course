enum StatusEnum {
    Started = "started",
    NotStarted = "notStarted",
    Done = "done"
} //keys correspond to integer values starting from 0  by default


console.log(StatusEnum.NotStarted) //1 (by default)

let notStartedEnum : StatusEnum = StatusEnum.Started;
//notStartedEnum = "food"; //error as only enum types allowed

//using enum inside interface

interface Task{
    id: string,
    status: StatusEnum
}

//postfix or prefix everything, "StatusEnum"