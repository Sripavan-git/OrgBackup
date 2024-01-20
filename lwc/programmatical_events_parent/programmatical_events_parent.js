import { LightningElement } from 'lwc';

export default class Programmatical_events_parent extends LightningElement {


    label;
    vol = 0;
    constructor()
    {
        super();

        this.template.addEventListener('evtvolup',this.handleIncrease.bind(this));
        this.template.addEventListener('evtvoldown',this.handleDecrease.bind(this));

    }

    handleIncrease(event)
    {
        this.label = event.detail;
        this.vol = this.vol + 1;
    }
    handleDecrease(event)
    {
        this.label = event.detail;
        this.vol = this.vol - 1;
    }

}