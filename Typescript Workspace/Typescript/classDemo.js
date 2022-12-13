"use strict";
exports.__esModule = true;
exports.sayHello = exports.Test = exports.Employee = void 0;
/*
class Employee{
    empId:number;
    empName:string;
    department:string;

    constructor(empId:number,empName:string,department:string)
    {
        this.empId=empId;
        this.empName=empName;
        this.department=department;
        
    }

getEmpInfo(){
    return this.empId+" "+this.empName+" "+this.department;
    }
}
    let emp:Employee=new Employee(1002,"Sara","Training");
    console.log(emp.getEmpInfo());
*/
//export to export the class employee
var Employee = /** @class */ (function () {
    //whenever u r using private or public keyword inside the constructor with parameters, automatically it will consider trhose arguments as there properties.
    function Employee(empId, empName, department) {
        this.empId = empId;
        this.empName = empName;
        this.department = department;
    }
    Employee.prototype.getEmpInfo = function () {
        return this.empId + " " + this.empName + " " + this.department;
    };
    return Employee;
}());
exports.Employee = Employee;
var emp = new Employee(1002, "Sara", "Training");
console.log(emp.getEmpInfo());
/*
    //inheritance
    class Manager extends Employee{
        constructor(empId:number, empName:string, department:string, public empSalary:number )
        {
            super(empId, empName, department);
        }
    
        //overriding the method
    getEmpInfo(){
        return super.getEmpInfo()+" "+ this.empSalary; //getEmpInfo-will call above method, it will reduce ur parisharam u know?!
        }
    }
    
        let manager:Manager=new Manager(1002,"Sara","Training",500000);
        console.log(manager.getEmpInfo());
    */
var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());
exports.Test = Test;
function sayHello() {
    //multiline string: use backtick
    return "Hello Respected sir, \n            I want holiday.\n            Regards,\n            Dhanshree Hood";
}
exports.sayHello = sayHello;
//default export: only one will be there
function display() {
    console.log("Display method");
}
exports["default"] = display;
