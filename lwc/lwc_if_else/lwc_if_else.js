import { LightningElement } from 'lwc';

export default class Lwc_if_else extends LightningElement {

    Name = 'test component'
    description= 'this is a test component'
    category = 'High'
    material = 'Rough'

    flag = false;
    connectedCallback()
    {
        setTimeout(() => {
            
            this.flag = true;
        }, 3000);
    }
    
}