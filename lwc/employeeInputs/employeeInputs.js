import { LightningElement } from 'lwc';

export default class EmployeeInputs extends LightningElement {

    empname;
    empsal;
    empage;
    capname(event)
    {
        this.empname = event.target.value;
    }
    capsal(event)
    {
        this.empsal = event.target.value;
    }
    capage(event)
    {
        this.empage = event.target.value;
    }

    submit(event)
    {
        this.dispatchEvent(new CustomEvent('evtemp',{detail : {ename : this.empname,esal : this.empsal, eage : this.empage}}));
    }
    
}