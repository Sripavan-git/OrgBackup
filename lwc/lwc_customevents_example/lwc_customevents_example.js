import { LightningElement } from 'lwc';

export default class Lwc_customevents_example extends LightningElement {

    volup(event)
    {
        this.dispatchEvent(new CustomEvent('evtinc',{detail : 'Increasing Volume'}));
    }

    voldec(event)
    {
        this.dispatchEvent(new CustomEvent('evtdec',{detail : 'decreasing Volume'}));
    }

}