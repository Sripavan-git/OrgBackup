import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class Lwc_imperation_account extends LightningElement {

    name;
    phone;
    des;

    capph(event)
    {
        this.phone= event.target.name;

    }
    capdes(event)
    {
        this.des= event.target.name;
    }

    capname(event)
    {
        this.name= event.target.name;
    }
    saveRecord(event)
    {

        const fields = {'Name':this.name,'Phone':this.phone,'Description':this.des};
        const recordData = {apiName : 'Account', fields};
        createRecord(recordData).then(response=>{
            alert('Account Created Successfully.. ');
        }).catch(error=>{
            const evt = new ShowToastEvent({
                title: 'Error',
                message: 'Account Creation Failed due to Error '+error.body.message,
                variant: 'success',
                
              });
              this.dispatchEvent(evt);
        })

    }

}