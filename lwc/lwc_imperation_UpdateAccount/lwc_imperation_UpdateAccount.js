import { LightningElement, wire } from 'lwc';
import searchAccount from '@salesforce/apex/searchallaccounts.getallaccounts'
import ACCOUNT_ID from '@salesforce/schema/Account.Id'
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone'
import { updateRecord } from 'lightning/uiRecordApi';
import {refreshApex} from '@salesforce/apex'


const COLS = [
    {label : 'Account Name ', fieldName : 'Name', type : 'text', editable: true},
    {label : 'Account Phone ', fieldName : 'Phone', type : 'text', editable: true},
    {label : 'Account Industry ', fieldName : 'Industry', type : 'text' },
    {label : 'Account Rating ', fieldName : 'Rating', type : 'text' }

]


export default class Lwc_imperation_UpdateAccount extends LightningElement {

    searchtxt;
    draftValues = [];
    accountcol = COLS;

    getSearchText(event)
    {
        this.searchtxt = event.target.value;
        //console.log(event.target.value);
    }

    @wire(searchAccount,{searchkey : '$searchtxt'})accounts;

    saveData(event)
    {
        // Create the field mapping to the draftvalues 
        const fields = {};
        fields[ACCOUNT_ID.fieldApiName] = event.detail.draftValues[0].Id;
        fields[ACCOUNT_NAME.fieldApiName] = event.detail.draftValues[0].Name;
        fields[ACCOUNT_PHONE.fieldApiName] = event.detail.draftValues[0].Phone;

        // Create Record data Variables to pass to the imperation method
        const recordData = {fields};

        // Call the Imperation
        updateRecord(recordData).then(response=>{
            this.draftValues = [];
            return refreshApex(this.accounts);

        }).catch(error=>{
            this.draftValues = [];
            return refreshApex(this.accounts);
        });
        


  
    }

}