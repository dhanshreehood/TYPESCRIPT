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
export class Employee{
    //whenever u r using private or public keyword inside the constructor with parameters, automatically it will consider trhose arguments as there properties.
    constructor(public empId:number,public empName:string, public department:string)
    {

    }

getEmpInfo(){
    return this.empId+" "+this.empName+" "+this.department;
    }
}
    let emp:Employee=new Employee(1002,"Sara","Training");
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

        export class Test{

        }

        export function sayHello(){
            //multiline string: use backtick
            return `Hello Respected sir, 
            I want holiday.
            Regards,
            Dhanshree Hood`;
        }

//default export: only one will be there
export default function display(){
    console.log("Display method");
} 