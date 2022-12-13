"use strict";
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
exports.__esModule = true;
//inheritance
// to import class from classDemo file. 
//name export example
var classDemo_1 = require("./classDemo");
var classDemo_2 = require("./classDemo");
var classDemo_3 = require("./classDemo");
//import{Employee, sayHello, Test} from "./classDemo";
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(empId, empName, department, empSalary) {
        var _this = _super.call(this, empId, empName, department) || this;
        _this.empSalary = empSalary;
        return _this;
    }
    //overriding the method
    Manager.prototype.getEmpInfo = function () {
        return _super.prototype.getEmpInfo.call(this) + " " + this.empSalary; //getEmpInfo-will call above method, it will reduce ur parisharam u know?!
    };
    return Manager;
}(classDemo_1.Employee));
var manager = new Manager(1002, "Sara", "Training", 500000);
console.log(manager.getEmpInfo());
//calling sayHello method after export
console.log((0, classDemo_2.sayHello)());
//calling display() from classDemo file
console.log((0, classDemo_3["default"])());
