import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class Pubsub_subscriber extends LightningElement {

    evtmsg

    connectedCallback()
    {
        this.register();
    }

    register(event)
    {
        pubsub.register('evtcustom',this.subscriberHandler.bind(this));
    }

    subscriberHandler(message)
    {
        this.evtmsg = message ? JSON.stringify(message,null,'\t') : 'no message received';
    }

}