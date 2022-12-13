//let msg:String="Hello"; //specifying type is optional if u will skip it will detect.
var msg = "Hello";
console.log(msg);
var num1 = 50;
var num2; //we can declare explicitly type any or it is by default any type
num2 = 10;
num2 = "Hello";
num2 = true;
//type interface
var num3 = 10; //if ur skipping declaration for type; u can't intialize any other value of diff type
//num3="Type Checking"; //will give error: Type 'string' is not assignable to type 'number'.
//union type
var a; //a can take any type opf value from the given list.
a = 4367;
a = "Okay";
//a=true //error : not assignable to number or string
//esx method
var name1 = 'Jhon';
var nameMsg = "Welcome ".concat(name1); //it's inside backtick syntax
console.log(nameMsg);
// 2 ways of declaring array
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(list1);
console.log(list2);
var colors;
(function (colors) {
    colors[colors["Red"] = 0] = "Red";
    colors[colors["Green"] = 1] = "Green";
    colors[colors["Blue"] = 2] = "Blue";
})(colors || (colors = {}));
; //u can initialize one of the given values only
var c = colors.Blue;
console.log(c); //index will get print.
console.log(colors);
function add(n1, n2) {
    return n1 + n2;
}
add(3, 45);
//add(3,"45"); // error
console.log(add);
//functional parameter as  optional
function add1(n1, n2, n3) {
    if (n2) {
        return n1 + n2;
    }
    else {
        return n1;
    }
}
add1(5, 66, 22);
console.log(add1(66, 22));
//default parameter
function add2(n1, n2) {
    if (n2 === void 0) { n2 = 10; }
    return n1 + n2;
}
console.log(add2(10));
//Arrow function
var sum = function (x, y) {
    return x + y;
};
console.log(sum(5, 8));
