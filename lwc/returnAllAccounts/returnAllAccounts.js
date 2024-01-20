import { LightningElement,wire} from 'lwc';
import getAcc from '@salesforce/apex/searchAccounts.getAccounts'

const skoolCols=[
                    {label : 'Name', fieldName : 'Name' , type : 'text'},
                    {label : 'Phone', fieldName : 'Phone' , type : 'Phone'},
                    {label : 'Industry', fieldName : 'Industry' , type : 'Industry'}
                ];

export default class RexAccounts extends LightningElement
 {
    cols=skoolCols;
    searchtext;
    schools;

    searchHandler(event)
    {
        this.searchtext = event.target.value;
        console.log(this.searchtext);
    }

    @wire(getAcc, {searchKey : '$searchtext'})schools;
    
 }