import { LightningElement, api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class Lwc_CS_Imperation extends LightningElement {

    @api recordId;

    name;phone;des;
    capname(event)
    {
        this.name = event.target.value;

    }
    capph(event)
    {
        this.phone = event.target.value;
    }
    capdes(event)
    {
        this.des = event.target.value;
    }


    save(event)
    {
        let fields = {'Name': this.name, 'Phone':this.phone, 'Description':this.des};
        let recordData = {apiName : 'Account',fields};

        createRecord(recordData)
        .then(response=>{
                const evt = new ShowToastEvent({
                title: 'Success',
                message: 'Account Created Successfullyy',
                variant: 'success',
                });
                this.dispatchEvent(evt);
        })
        .catch(error=>{
            const evt = new ShowToastEvent({
                title: 'Error Occured',
                message: 'Account Creation Failed '+error.body.message,
                variant: 'error',
              });
              this.dispatchEvent(evt);
        });
    }

}