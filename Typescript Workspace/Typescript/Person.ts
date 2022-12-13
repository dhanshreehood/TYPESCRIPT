interface Person
{
    name:string;
    age:number;
    dob:String
}
function showPerson(person:Person)
{
    console.log(`${person.name} ${person.age} ${person.dob}`)
}
showPerson({name:"Dhanshreee",age:20, dob:"24/12/2022"})

//u can create ur own type
type WindowStates ="open" | "close" | "minimize";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 2| 3| 4;
