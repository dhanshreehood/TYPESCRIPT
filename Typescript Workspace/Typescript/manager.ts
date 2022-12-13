    //inheritance
    // to import class from classDemo file. 
    //name export example
    import{Employee, sayHello} from "./classDemo";
    import {sayHello as hello} from "./classDemo";
    import d from "./classDemo";
    //import{Employee, sayHello, Test} from "./classDemo";
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

        //calling sayHello method after export
        console.log(hello());


        //calling display() from classDemo file
        console.log(d());