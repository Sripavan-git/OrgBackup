import { LightningElement } from 'lwc';

export default class FormBasedLds extends LightningElement {

    reset(event)
    {
        recordid = '0015j000013K0m7AAC';
        let inputfields = this.template.querySelectorAll('lightning-input-field');
        inputfields.forEach((data)=> {data.reset();})
    }

}