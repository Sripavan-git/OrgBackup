import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
import Username from '@salesforce/schema/User.Username';
import useremail from '@salesforce/schema/User.Email';

export default class Pubsub_publisher extends LightningElement {

    msg;
    user = JSON.stringify(Username);
    email = JSON.stringify(useremail);

    captext(event)
    {
        this.msg = event.target.value;
    }
    save(event)
    {
        // Form the message 
        let pass = { 
            'Message': this.msg,
            'Sender Name': 'Sri Pavan Maddela',
            'Date of Send' : '14/12/2023'
        }

        // Fire the event
        pubsub.fire('evtcustom',pass);
        
    }
}