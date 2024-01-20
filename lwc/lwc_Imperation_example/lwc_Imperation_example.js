import { LightningElement } from 'lwc';
import savecon from '@salesforce/apex/lwc_createcontact.createcontact'

export default class Lwc_Imperation_example extends LightningElement {

    fname;
    lname;
    phn;
    eml;

    capfname(event)
    {
        this.fname = event.target.value;
    }
    caplname(event)
    {
        this.lname = event.target.value;
    }
    capphone(event)
    {
        this.phn = event.target.value;
    }

    capEmail(event)
    {
        this.eml = event.target.value;
    }

    saveContact(event)
    {
        savecon({fname: this.fname,lname:this.lname,phone : this.phn,email:this.eml})
        .then(response=>{
            alert(response)
        })
        .catch(error=>{console.log('error is '+error);})
    }

}