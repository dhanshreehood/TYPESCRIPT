//let msg:String="Hello"; //specifying type is optional if u will skip it will detect.
let msg ="Hello";
console.log(msg);
let num1:number=50;

let num2:any; //we can declare explicitly type any or it is by default any type
num2=10;
num2="Hello";
num2=true;

//type interface
let num3=10; //if ur skipping declaration for type; u can't intialize any other value of diff type
//num3="Type Checking"; //will give error: Type 'string' is not assignable to type 'number'.

//union type
let a: number | string; //a can take any type opf value from the given list.
a=4367;
a="Okay";
//a=true //error : not assignable to number or string

//esx method
let name1:string='Jhon';
let nameMsg:string=`Welcome ${name1}`; //it's inside backtick syntax
console.log(nameMsg);

// 2 ways of declaring array
let list1:number[]=[1,2,3,4,5];
let list2:Array<number>=[1,2,3,4,5,6,7,8,9,10,11];
console.log(list1);
console.log(list2);

enum colors{Red,Green, Blue}; //u can initialize one of the given values only
let c:colors=colors.Blue;
console.log(c); //index will get print.
console.log(colors);

function add(n1:number,n2:number):number  // declaring type for the result we r gonna get. also the values we are getting to do function.
{
    return n1+n2;
}
add(3,45);
//add(3,"45"); // error
console.log(add);

//functional parameter as  optional
function add1(n1:number, n2?:number, n3?:number):number
{
    if(n2){
        return n1+n2;
    }
    else{
        return n1;
    }
} 
add1(5,66,22);
console.log(add1(66,22));

//default parameter
function add2(n1:number,n2:number=10):number{
    return n1+n2;
}
console.log(add2(10));
//Arrow function
let sum=(x:number, y:number): number => {
    return x+y;
}
console.log(sum(5,8));