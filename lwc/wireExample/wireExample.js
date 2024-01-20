import { LightningElement } from 'lwc';
import { wire } from 'lwc';
import getAllAcc from '@salesforce/apex/ReturnAllAccounts.getAllAcc'
export default class WireExample extends LightningElement {

    @wire(getAllAcc) accountData;
}