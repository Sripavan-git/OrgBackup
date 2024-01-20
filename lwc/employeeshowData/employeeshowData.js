import { LightningElement } from 'lwc';

export default class EmployeeshowData extends LightningElement {

    employeename;
    employeesal;
    employeeage;
    getDetails(event)
    {
        this.employeename = event.detail.ename;
        this.employeesal = event.detail.esal;
        this.employeeage = event.detail.eage;
        
    }
}