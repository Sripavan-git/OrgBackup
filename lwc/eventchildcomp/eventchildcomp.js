import { LightningElement,api } from 'lwc';

export default class Eventchildcomp extends LightningElement {





    handleIncrease(event)
    {
        this.dispatchEvent(new CustomEvent('increase'));
    }


    // date = new Date();

    // @api
    // refresh()
    // {
    //     this.date = new Date();
    // } 

}