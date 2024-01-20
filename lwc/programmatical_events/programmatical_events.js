import { LightningElement } from 'lwc';

export default class Programmatical_events extends LightningElement {

    volumeup(event)
    {
        this.dispatchEvent(new CustomEvent('evtvolup',{detail : 'Increasing Volume', bubbles : true, composed : true}));
    }
    volumedown(event)
    {
        this.dispatchEvent(new CustomEvent('evtvoldown',{detail : 'Decreasing Volume', bubbles : true, composed : true}));
    }
}