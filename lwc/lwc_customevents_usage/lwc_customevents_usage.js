import { LightningElement } from 'lwc';

export default class Lwc_customevents_usage extends LightningElement {

    volume = 0;
    label = 'Initialising this Volume'

    incvol(event){

        this.volume = this.volume + 1;
        this.label = event.detail;
    }

    decvol(event)
    {
        this.volume = this.volume - 1;
        this.label = event.detail;

    }
}