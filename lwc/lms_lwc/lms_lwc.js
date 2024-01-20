import { LightningElement } from 'lwc';
import MYMSGCHANNEL from '@salesforce/messageChannel/MyMsgChannel__c'
import { publish } from 'lightning/messageService';
import { subscribe } from 'lightning/messageService';
import { unsubscribe } from 'lightning/messageService';
import { createMessageContext } from 'lightning/messageService';
import { releaseMessageContext } from 'lightning/messageService';

export default class Lms_lwc extends LightningElement {

    receivedmsg;
    mymsg;
    subscribeToMC;
    context = createMessageContext();
    constructor()
    {
        super();
    }
    capinput(event)
    {
        this.mymsg = event.target.value;
    }

    publishmc(event)
    {
        const message = {
            messageToSend : this.mymsg,
            sourceSystem : 'LWC',
            SenderName : 'Test Name',
            SenderEmail : 'test@gmail.com'
        }
        publish(this.context,MYMSGCHANNEL,message);

    }
    subscribemc(event)
    {
        if(this.subscribeToMC)
        {
            return 
        }
        this.subscribeToMC = subscribe(this.context, MYMSGCHANNEL, (message)=>{this.displayMessage(message)})
        
    }

    displayMessage(message)
    {
        this.receivedmsg = json.stringify(message);
    }
    unsubscribemc(event)
    {
        unsubscribe(this.subscribeToMC);
        this.subscribeToMC = null;
    }

    disconnectedCallback()
    {
        releaseMessageContext(this.context);
    }
}