import { LightningElement } from 'lwc';

export default class Eventparentcomp extends LightningElement {


    count=0;
    handleCount(event)
    {
        this.count += 1;
    }

    // handleClick(event)
    // {
    //     this.template.querySelector('c-eventchildcomp').refresh();
    // }
}